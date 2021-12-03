(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(13),r=c.n(s),i=c(7),l=c(3),j=c(6),o=c.n(j),d=c(8),b=c(4),u=c(9),h=c.n(u),x=c(1),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(l.f)(),r=function(){var e=Object(d.a)(o.a.mark((function e(t){var c,n,r,i,l,j,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),"/integration",t.preventDefault(),c=t.target[0].value,n=t.target[1].value,r=t.target[2].value,i=t.target[3].value,l=t.target[4].value,e.next=10,fetch("/integration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:c,clientId:n,clientSecret:r,clientCode:i,redirectUri:l})});case 10:if(!(j=e.sent).ok){e.next=13;break}return e.abrupt("return",s("/"));case 13:return e.next=15,j.json();case 15:d=e.sent,a(d.message),console.log(d);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("main",{className:h.a.formContainer,children:Object(x.jsxs)("div",{className:h.a.wrapper,children:[Object(x.jsx)("h1",{className:"h1",children:"Integration"}),c?Object(x.jsx)("div",{className:h.a.errorDiv,children:c}):"",Object(x.jsx)("form",{onSubmit:r,className:"form",children:Object(x.jsxs)("div",{className:h.a.formDiv,children:[Object(x.jsxs)("label",{htmlFor:"domain",children:["\u0412\u0430\u0448 \u0434\u043e\u043c\u0435\u043d: https://",Object(x.jsx)("b",{children:"your_domain"}),".amocrm.ru"]}),Object(x.jsx)("input",{type:"text",name:"domain",id:"domain",required:!0}),Object(x.jsx)("label",{htmlFor:"clientId",children:"ID \u0438\u043d\u0435\u0433\u0440\u0430\u0446\u0438\u0438:"}),Object(x.jsx)("input",{type:"text",name:"clientId",id:"clientId",required:!0}),Object(x.jsx)("label",{htmlFor:"clientSecret",children:"\u0421\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447:"}),Object(x.jsx)("input",{type:"text",name:"clientSecret",id:"clientSecret",required:!0}),Object(x.jsx)("label",{htmlFor:"clientCode",children:"\u041a\u043e\u0434 \u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438:"}),Object(x.jsx)("input",{type:"text",name:"clientCode",id:"clientCode",required:!0}),Object(x.jsx)("label",{htmlFor:"redirectUri",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f: "}),Object(x.jsx)("input",{type:"text",name:"redirectUri",id:"redirectUri",required:!0}),Object(x.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})})},m=c(14),p=c.n(m),v=function(e){var t=e.lead,c=Object(n.useState)(!1),a=Object(b.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)("+"),l=Object(b.a)(i,2),j=l[0],o=l[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"tbl-cell",children:Object(x.jsx)("span",{className:"plus-container",onClick:function(e){s?(o("+"),r(!1)):(o("-"),r(!0))},children:j})}),Object(x.jsx)("td",{className:"tbl-cell text-left",children:t.name}),Object(x.jsx)("td",{className:"tbl-cell",children:Object(x.jsx)("div",{className:"status",style:{backgroundColor:t.status.color},children:t.status.name})}),Object(x.jsx)("td",{className:"tbl-cell",children:Object(x.jsxs)("div",{className:"responsible-person-container",children:[Object(x.jsx)("img",{src:"/noava.jpg",alt:"avatar",className:"avatar"}),Object(x.jsx)("span",{className:"responsible-name",children:t.responsible_user.name})]})}),Object(x.jsx)("td",{className:"tbl-cell",children:t.created_time}),Object(x.jsxs)("td",{className:"tbl-cell",children:[t.price," \u20bd"]})]}),Object(x.jsxs)("tr",{className:s?"contacts":"contacts hidden",children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{colSpan:"5",children:t.contacts.map((function(e){return Object(x.jsxs)("div",{className:"contact-container",children:[Object(x.jsx)("img",{src:"/noava.jpg",alt:"avatar",className:"avatar"}),Object(x.jsxs)("span",{className:"contact-name",children:[e.name," "]}),Object(x.jsx)("span",{children:e.custom_fields_values.map((function(e){return Object(x.jsx)("span",{children:e.values.map((function(e){return parseInt(e.value)?Object(x.jsx)("a",{href:"tel:+"+e.value,className:"tel-email",children:"\ud83d\udcde"},e.enum_id):Object(x.jsx)("a",{href:"mailto:"+e.value,className:"tel-email",children:"\u2709"},e.enum_id)}))},e.field_id)}))})]},e.id)}))})]})]})},f=function(){return Object(x.jsx)("div",{className:"nores-block",children:Object(x.jsxs)("div",{className:"nores-container",children:[Object(x.jsx)("img",{src:"/noresults.jpg",alt:"noresults"}),Object(x.jsx)("p",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})})},g=c(15),N=c(12);function y(e){var t=e.setData,c=e.setIsLoading,a=Object(n.useState)(""),s=Object(b.a)(a,2),r=s[0],i=s[1],l=function(e,t){var c=Object(n.useRef)(),a=Object(n.useCallback)((function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];console.log(a),c.current&&clearTimeout(c.current),c.current=setTimeout((function(){e.apply(void 0,a)}),t)}),[e,t]);return a}((function(){return u.apply(this,arguments)}),500),j=function(e){i(e.target.value),e.target.value.length>2&&l(e.target.value),e.target.value||l()};function u(){return u=Object(d.a)(o.a.mark((function e(){var n,a,s,r,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",c(!0),a="/api/?search=".concat(n),e.next=5,fetch(a);case 5:if(s=e.sent,r="",!s.ok){e.next=11;break}return e.next=10,s.json();case 10:r=e.sent;case 11:t(r),c(!1);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)("input",{type:"text",name:"search",id:"search",value:r,onChange:j,placeholder:"\u041f\u043e\u0438\u0441\u043a"}),r?Object(x.jsx)(N.a,{onClick:function(){j({target:{value:""}})},className:"search-cross"}):Object(x.jsx)(N.a,{visibility:"hidden",className:"search-cross"}),Object(x.jsx)(g.a,{className:"search-icon"})]})}var _=function(){var e,t="/api",c=Object(n.useState)(""),a=Object(b.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(!0),u=Object(b.a)(j,2),h=u[0],O=u[1],m=Object(l.f)();function g(){return(g=Object(d.a)(o.a.mark((function e(){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:if(n=e.sent,500!==c.status){e.next=8;break}return e.abrupt("return",m("/integration"));case 8:r(n),O(!1),console.log(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"wrapper-search",children:[Object(x.jsx)("h3",{children:Object(x.jsx)(i.b,{to:"/integration",children:"CRM Integration"})}),Object(x.jsx)(y,{setData:r,setIsLoading:O})]}),Object(x.jsxs)("div",{children:[h&&Object(x.jsx)("div",{className:"loader-container",children:Object(x.jsx)(p.a,{className:"loader",type:"bubbles",color:"#019ce4",height:"100px",width:"100px"})}),s?Object(x.jsxs)("table",{className:"table",children:[Object(x.jsxs)("colgroup",{children:[Object(x.jsx)("col",{style:{width:"50px"}}),Object(x.jsx)("col",{style:{width:"400px"}}),Object(x.jsx)("col",{style:{width:"150px",minWidth:"150px"}}),Object(x.jsx)("col",{style:{minWidth:"150px"}}),Object(x.jsx)("col",{style:{minWidth:"150px"}}),Object(x.jsx)("col",{style:{minWidth:"100px"}})]}),Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(x.jsx)("th",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(x.jsx)("th",{children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439"}),Object(x.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),Object(x.jsx)("th",{children:"\u0411\u044e\u0434\u0436\u0435\u0442"})]})}),Object(x.jsx)("tbody",{children:null===s||void 0===s||null===(e=s._embedded)||void 0===e?void 0:e.leads.map((function(e){return Object(x.jsx)(v,{lead:e},e.id)}))})]}):Object(x.jsx)(f,{})]})]})};c(22);function k(){return Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/",element:Object(x.jsx)(_,{})}),Object(x.jsx)(l.a,{path:"/integration",element:Object(x.jsx)(O,{})})]})}r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(k,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={formContainer:"integration_formContainer__1TV90",wrapper:"integration_wrapper__32yF1",formDiv:"integration_formDiv__2Nd1W",errorDiv:"integration_errorDiv__3gTOO",blink:"integration_blink__3pg28"}}},[[23,1,2]]]);
//# sourceMappingURL=main.577ea510.chunk.js.map