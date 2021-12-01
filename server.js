const fs = require('fs/promises');
const axios = require('axios');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const getTokenAxios = axios.create()
axios.interceptors.request.use(async function (config) {
  try {
    const { access_token } = await getTokensFromFile()
    config.headers.Authorization = `Bearer ${access_token}`
    return config;
  } catch (err) {
    console.log(err);
  }

}, function (error) {return Promise.reject(error)});

axios.interceptors.response.use(function(response) {return response;},
  async function (error) {
    try {
      if(error.response.status === 401 && error.config && !error.config._isRetry) {
        console.log('Change token');
        error.config._isRetry = true
        const { refresh_token } = await getTokensFromFile()
        const { client_id, client_secret, redirect_uri, domain } = await getUserDataFromFile()
        const CRM_URL = `https://${domain}.amocrm.ru`

        await refreshTokens(refresh_token, CRM_URL, client_id, client_secret, redirect_uri)
        const resendRequestResult = await axios.request(error.config)

        return resendRequestResult
      }
      return Promise.reject(error);
    } catch (err) {
      console.log('Error');
    }
  }
);

app.get('/api', async (req, res) => {
  try {
    const { domain } = await getUserDataFromFile()
    const DOMAIN = domain
    const CRM_URL = `https://${DOMAIN}.amocrm.ru`
    const usersURL = `${CRM_URL}/api/v4/users`
    const contactsURL = `${CRM_URL}/api/v4/contacts`
    const pipelinesURL = `${CRM_URL}/api/v4/leads/pipelines`
    const leadsURL = `${CRM_URL}/api/v4/leads?with=contacts`

    let usersData = await getDataFromApi(usersURL)
    let contactsData = await getDataFromApi(contactsURL)
    let pipelinesData = await getDataFromApi(pipelinesURL)
    let leadsData
    
    let { search } = req.query
    if( search && search.length > 2) {
      let params = { query: search }
      leadsData = await getDataFromApi(leadsURL, params)
    }
    else {
      leadsData = await getDataFromApi(leadsURL)
    }
    if(leadsData && contactsData && pipelinesData && usersData) {
      combineLeadsData(leadsData, contactsData, pipelinesData, usersData)
    }
    else {
      return res.status(404).json({message: 'Not found'})
    }
    res.status(200).json(leadsData)
  } catch (err) {
    console.log(err);
    res.status(500).json('Unexpected error')
  }
})

app.post('/integration', async (req, res) => {
  console.log('Integration');
  const {domain, clientId, clientSecret, clientCode, redirectUri} = req.body
  if(domain && clientId && clientSecret && clientCode && redirectUri) {
    const result = await getAccessAndRefreshToken(domain, clientId, clientSecret, clientCode, redirectUri) 

    if(result) {
      return res.status(200).json({ message: 'Success integration'})
    }
    return res.status(400).json({message: 'Bad request'})
  }
  res.status(400).json({ message: 'Not enough params'})
})

app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)})

async function refreshTokens(refreshToken, url_CRM, clientId, clientSecret, redirectUri) {
  try {
    const URL = `${url_CRM}/oauth2/access_token`
    const reqBody = {
      "client_id": clientId,
      "client_secret": clientSecret,
      "grant_type": "refresh_token",
      "refresh_token": refreshToken,
      "redirect_uri": redirectUri
    }
    const response = await axios.post(URL, reqBody)
    const { access_token, refresh_token } = response.data
    await fs.writeFile('tokens.txt', JSON.stringify({ access_token, refresh_token }))
    return console.log('Tokens successfully updated');
  } catch (err) {
    console.log(err);
  }
}

async function getTokensFromFile() {
  const stringData = await fs.readFile('tokens.txt', 'utf8')
  const { access_token, refresh_token } = JSON.parse(stringData)
  return { access_token, refresh_token }
}

async function getDataFromApi(url, params = {}) {  
  try {
    let options = {params}
    const response = await axios.get(url, options)
    return response.data
  } catch (err) {
    console.log(err);
  }
}

function combineLeadsData(leadsData, contactsData, pipelinesData, usersData) {

  leadsData._embedded.leads.forEach((lead, index, array) => {
    // Add user object to lead
    const respUserId = lead.responsible_user_id
    const userDataById = usersData._embedded.users.filter(user => user.id === respUserId)
    array[index].responsible_user = userDataById[0]
    
    // Add contacts objects to lead
    array[index].contacts = []
    lead._embedded.contacts.forEach(contact => {
      const contactId = contact.id
      const contactArr = contactsData._embedded.contacts.filter(contact => contact.id === contactId)
      array[index].contacts.push(contactArr[0])
    })
    // Convert unix stamp to date
    const timeStamp = lead.created_at * 1000
    const dateVal = new Date(timeStamp).toLocaleDateString('en-GB');
    array[index].created_time = dateVal
    
    // Add status object to lead
    const statusId = lead.status_id
    const pipelineId = lead.pipeline_id
    const pipeLineArr = pipelinesData._embedded.pipelines.filter(pipeline => pipeline.id === pipelineId)
    const statusArr = pipeLineArr[0]._embedded.statuses.filter(status => status.id === statusId)
    array[index].status = statusArr[0]
  })
}

async function getAccessAndRefreshToken(domain, client_id, client_secret, client_code, redirect_uri) {
  try {
    const DOMAIN = domain
    const CRM_URL = `https://${DOMAIN}.amocrm.ru`
    const URL = `${CRM_URL}/oauth2/access_token`
    const reqBody = {
      "client_id": client_id,
      "client_secret": client_secret,
      "grant_type": "authorization_code",
      "code": client_code,
      "redirect_uri": redirect_uri
    }
    const response = await getTokenAxios.post(URL, reqBody)
    const { access_token, refresh_token } = response.data

    await fs.writeFile('user_data.txt', JSON.stringify({ client_id, client_secret, redirect_uri, domain }))
    await fs.writeFile('tokens.txt', JSON.stringify({ access_token, refresh_token }))
    return true

  } catch (err) {
    console.log('Error getAccessAndRefreshToken' , err.message , err.name);
  }
}

async function getUserDataFromFile() {
    const stringData =  await fs.readFile('user_data.txt', 'utf8')
    const {client_id, client_secret, redirect_uri, domain} = JSON.parse(stringData)
    return {client_id, client_secret, redirect_uri, domain}
}
