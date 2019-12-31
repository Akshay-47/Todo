(this["webpackJsonptodo-application"]=this["webpackJsonptodo-application"]||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),o=n.n(l),c=n(2),i=(n(25),function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},"Todo App"))}),u=function(e){var t=e.name,n=void 0===t?"Btn":t,a=e.class_,l=void 0===a?"":a,o=e.onClick,c=void 0===o?null:o,i=e.type,u=void 0===i?"":i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:u,className:"button "+l,onClick:c},n))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showAll:!0,showPending:!1,showCompleted:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_ALL":return{showAll:!0,showPending:!1,showCompleted:!1};case"SHOW_PENDING":return{showAll:!1,showPending:!0,showCompleted:!1};case"SHOW_COMPLETED":return{showAll:!1,showPending:!1,showCompleted:!0};default:return e}},d=Object(c.b)((function(e){return{filter:e.filter}}),(function(e){return{showAll:function(){return e({type:"SHOW_ALL"})},showPending:function(){return e({type:"SHOW_PENDING"})},showCompleted:function(){return e({type:"SHOW_COMPLETED"})}}}))((function(e){var t=e.showAll,n=e.showPending,a=e.showCompleted,l=e.filter;return r.a.createElement("div",{className:"tab-section"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:t},r.a.createElement(u,{class_:"tab-button "+(l.showAll?"active":null),name:"SHOW ALL"})),r.a.createElement("li",{onClick:n},r.a.createElement(u,{class_:"tab-button "+(l.showPending?"active":null),name:"PENDING"})),r.a.createElement("li",{onClick:a},r.a.createElement(u,{class_:"tab-button "+(l.showCompleted?"active":null),name:"COMPLETED"}))))})),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sortBy:null,type:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_BY_SUMMARY":return"title"===e.sortBy?{sortBy:"title",type:!e.type}:{sortBy:"title",type:!0};case"SORT_BY_PRIORITY ":return"priority"===e.sortBy?{sortBy:"priority",type:!e.type}:{sortBy:"priority",type:!0};case"SORT_BY_CREATED_ON":return"created_on"===e.sortBy?{sortBy:"created_on",type:!e.type}:{sortBy:"created_on",type:!0};case"SORT_BY_DUE_DATE":return"due_date"===e.sortBy?{sortBy:"due_date",type:!e.type}:{sortBy:"due_date",type:!0};case"SORT_BY_ACTIONS":return"actions"===e.sortBy?{sortBy:"actions",type:!e.type}:{sortBy:"actions",type:!0};default:return e}},p=Object(c.b)(null,(function(e){return{sortBySummary:function(){return e({type:"SORT_BY_SUMMARY"})},sortByPriority:function(){return e({type:"SORT_BY_PRIORITY "})},sortByCreatedOn:function(){return e({type:"SORT_BY_CREATED_ON"})},sortByDueDate:function(){return e({type:"SORT_BY_DUE_DATE"})},sortByActions:function(){return e({type:"SORT_BY_ACTIONS"})}}}))((function(e){var t=e.sortBySummary,n=e.sortByPriority,a=e.sortByCreatedOn,l=e.sortByDueDate,o=e.sortByActions;return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:t},"Summary"),r.a.createElement("th",{onClick:n},"Priority"),r.a.createElement("th",{onClick:a},"Created On"),r.a.createElement("th",{onClick:l},"Due Date"),r.a.createElement("th",{onClick:o},"Actions")))})),E=n(1),f=Object(c.b)((function(e){return{posts:e.todos,postIdToEdit:e.formEdit}}))((function(e){var t=e.type,n=e.formId,l=e.handleFormSubmit,o=e.handleCancel,c=e.postIdToEdit,i=e.posts,s=Object(a.useState)(""),d=Object(E.a)(s,2),m=d[0],p=d[1],f=Object(a.useState)(""),y=Object(E.a)(f,2),h=y[0],O=y[1],v=Object(a.useState)(""),b=Object(E.a)(v,2),_=b[0],D=b[1],S=Object(a.useState)(""),T=Object(E.a)(S,2),g=T[0],C=T[1],w=Object(a.useState)(!1),A=Object(E.a)(w,2),B=A[0],N=A[1],j=Object(a.useState)("none"),k=Object(E.a)(j,2),P=k[0],R=k[1],F=Object(a.useState)(""),I=Object(E.a)(F,2),L=I[0],M=I[1],Y=Object(a.useState)(null),x=Object(E.a)(Y,2),H=x[0],W=x[1],U=Object(a.useState)(null),G=Object(E.a)(U,2),J=G[0],z=G[1],K=function(e){N(e.target.value)},V=0;"edit"===t&&(V=1);var q=function(e){return i.find((function(t){return t.id===e}))};Object(a.useEffect)((function(){return function(){if(null!==c){var e=q(c);W(e),p(e.title),D(e.description),R(e.priority),M(e.dueDate),N(e.currentState),z(e.createdAt)}}()}),[]);return r.a.createElement("div",null,r.a.createElement("form",{id:n},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"title"},r.a.createElement("span",null," Title:")),r.a.createElement("input",{type:"text",value:m,onChange:function(e){return p(e.target.value)},id:"title",onBlur:function(){m.length<10?O("Enter at least 10 characters"):m.length>500?O("Max Length Exceeded"):O("")}}),r.a.createElement("span",{className:"error"},h)),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"description"},r.a.createElement("span",null," Description:")),r.a.createElement("textarea",{value:_,onChange:function(e){return D(e.target.value)},rows:"10",cols:"30",id:"description",onBlur:function(){_.length<10?C("Enter at least 10 characters"):_.length>500?C("Max Length Exceeded"):C("")}}),r.a.createElement("span",{className:"error"},g)),1===V&&r.a.createElement("div",{className:"current-state"},r.a.createElement("label",null,r.a.createElement("span",null,"Current State:")),r.a.createElement("fieldset",null,r.a.createElement("p",{className:"radio"},r.a.createElement("input",{type:"radio",value:"true",checked:!0===B,onChange:function(e){return K(e)},id:"closed_task"}),r.a.createElement("label",{htmlFor:"closed_task"},r.a.createElement("span",null,"Closed"))),r.a.createElement("p",{className:"radio"},r.a.createElement("input",{type:"radio",value:"false",checked:!1===B,onChange:function(e){return K(e)},id:"open_task"}),r.a.createElement("label",{htmlFor:"open_task"},r.a.createElement("span",null,"Open"))))),1===V&&r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",null,"Created At:")),r.a.createElement("span",null,J)),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"due_date"},r.a.createElement("span",null,"Due Date:")),r.a.createElement("input",{type:"date",name:"due date",id:"due_date",value:L,onChange:function(e){return M(e.target.value)}})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"priority"},r.a.createElement("span",null,"Priority")),r.a.createElement("select",{id:"priority",value:P,name:"priority",onChange:function(e){return R(e.target.value)}},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"high"},"High"),r.a.createElement("option",{value:"none"},"None"))),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{name:"Save",class:"submit",type:"button",onClick:function(e){return function(e){if(e.preventDefault(),0===V){if(""===h&&""===g){var t={id:Number(Date.now()),currentState:B,title:m,description:_,createdAt:(new Date).toISOString().substring(0,10),dueDate:L,priority:P};l(t)}}else{var n={id:H.id,currentState:B,title:m,description:_,createdAt:H.createdAt,dueDate:L,priority:P};l(n)}}(e)}}),r.a.createElement(u,{name:"Cancel",class:"cancel",onClick:function(){return o()}}))))})),y=function(e){var t=e.show,n=e.title,a=e.content,l=e.actions,c=e.onDismiss;return t?o.a.createPortal(r.a.createElement("div",{onClick:c,className:"modal"},r.a.createElement("div",{className:"backdrop"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"modal-content"},r.a.createElement("span",{onClick:c,className:"close"},"\xd7"),r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"title"},n)),r.a.createElement("div",{className:"content"},a),r.a.createElement("div",{className:"actions"},l),r.a.createElement("div",null)))),document.querySelector("#modal")):null};var h=function(e,t){var n={high:4,medium:3,low:2,none:1};return n[e.priority]>n[t.priority]?1:n[e.priority]===n[t.priority]?0:-1},O=function(e,t){var n=new Date(e.dueDate),a=new Date(t.dueDate);return n.getTime()-a.getTime()},v=function(e,t){var n=new Date(e.createdAt),a=new Date(t.createdAt);return n.getTime()-a.getTime()},b=function(e,t){return Number(e.currentState)-Number(t.currentState)},_=function(e){return e?r.a.createElement("div",{className:"todo-item action"},r.a.createElement(u,{name:"Re-Open",class_:"re-open"})):r.a.createElement("div",{className:"todo-item action"},r.a.createElement(u,{name:"Edit",class_:"edit"}),r.a.createElement(u,{name:"Delete",class_:"delete"}),r.a.createElement(u,{name:"Done",class_:"done"}))},D=Object(c.b)((function(e){return{todos:e.todos,filterBy:e.filter,sort:e.sort}}))((function(e){var t=e.todos,n=e.filterBy,a=e.handleTableRowClick,l=e.sort,o=function(e,t){var n=t.showAll,a=t.showPending,r=t.showCompleted;return n?e:a?e.filter((function(e){return!1===e.currentState})):r?e.filter((function(e){return!0===e.currentState})):void 0}(t,n);if("title"===l.sortBy){var c=l.type?"asc":"desc",i=o.sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,a){if(!n.hasOwnProperty(e)||!a.hasOwnProperty(e))return 0;var r="string"===typeof n[e]?n[e].toUpperCase():n[e],l="string"===typeof a[e]?a[e].toUpperCase():a[e],o=0;return r>l?o=1:r<l&&(o=-1),"desc"===t?-1*o:o}}("title",c));o=i}if("priority"===l.sortBy){var u=o.sort(h);o=l.type?u:u.reverse()}if("created_on"===l.sortBy){var s=o.sort(v);o=l.type?s:s.reverse()}if("due_date"===l.sortBy){var d=o.sort(O);o=l.type?d:d.reverse()}if("actions"===l.sortBy){var m=o.sort(b);o=l.type?m:m.reverse()}return o.map((function(e,t){return r.a.createElement("tr",{key:t,onClick:function(t){return a(t,e.id)}},r.a.createElement("td",{className:"table-data "+(e.currentState?"complete":"in-complete")},e.title),r.a.createElement("td",{className:"table-data "+(e.currentState?"complete":"in-complete")},e.priority),r.a.createElement("td",{className:"table-data "+(e.currentState?"complete":"in-complete")},e.createdAt),r.a.createElement("td",{className:"table-data "+(e.currentState?"complete":"in-complete")},e.dueDate),r.a.createElement("td",{className:"table-data "+(e.currentState?"complete":"in-complete")},_(e.currentState)))}))})),S=n(11),T=n(10),g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"API_CALL_STARTED":return!0;case"API_CALL_COMPLETED":return!1;default:return e}},C=[{id:"21-2724354",currentState:!0,title:"Vagram",description:"Down-sized zero administration structure",createdAt:"2018-04-12",dueDate:"2016-12-06",priority:"high"},{id:"08-8134178",currentState:!0,title:"Quo Lux",description:"Versatile multimedia functionalities",createdAt:"2018-02-28",dueDate:"2014-06-04",priority:"low"},{id:"40-0748320",currentState:!1,title:"Treeflex",description:"Networked well-modulated local area network",createdAt:"2018-08-12",dueDate:"2019-04-12",priority:"high"},{id:"07-7665604",currentState:!1,title:"Greenlam",description:"Innovative bandwidth-monitored open system",createdAt:"2018-04-02",dueDate:"2018-06-12",priority:"low"},{id:"43-6412811",currentState:!1,title:"Fintone",description:"Future-proofed well-modulated standardization",createdAt:"2018-09-12",dueDate:"2019-10-14",priority:"medium"}],w=function(e,t){e({type:"API_CALL_STARTED"}),setTimeout((function(){e(t),e({type:"API_CALL_COMPLETED"})}),500)},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[t.payload].concat(Object(T.a)(e));case"DELETE_TODO":return e.filter((function(e){return e.id!==t.payload}));case"RE_OPEN":return e.map((function(e){return e.id===t.payload?Object(S.a)({},e,{currentState:!1}):e}));case"MARK_DONE":return e.map((function(e){return e.id===t.payload?Object(S.a)({},e,{currentState:!0}):e}));case"EDIT_TODO":var n=e.findIndex((function(e){return e.id===t.payload.id}));if(JSON.stringify(t.payload)===JSON.stringify(e[n]))return e;var a=Object(T.a)(e);return a[n]=t.payload,a;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORM_TO_EDIT":return t.payload;case"CLEAR_FROM_TO_EDIT":return null;default:return e}},N=Object(c.b)((function(e){return{todos:e.todos}}),(function(e){return{deleteTodo:function(t){return e((n=t,function(e,t){t().isFetching||w(e,{type:"DELETE_TODO",payload:n})}));var n},reOpenTodo:function(t){return e((n=t,function(e,t){t().isFetching||w(e,{type:"RE_OPEN",payload:n})}));var n},markDone:function(t){return e((n=t,function(e,t){t().isFetching||w(e,{type:"MARK_DONE",payload:n})}));var n},editTodo:function(t){return e(function(e){return function(t,n){n().isFetching||w(t,{type:"EDIT_TODO",payload:e})}}(t))},setFormToEdit:function(t){return e(function(e){return{type:"SET_FORM_TO_EDIT",payload:e}}(t))},clearFormToEdit:function(t){return e({type:"CLEAR_FROM_TO_EDIT"})}}}))((function(e){var t=e.todos,n=e.deleteTodo,l=e.reOpenTodo,o=e.markDone,c=e.setFormToEdit,i=e.clearFormToEdit,s=e.editTodo,d=Object(a.useState)(!1),m=Object(E.a)(d,2),p=m[0],h=m[1],O=Object(a.useState)(!1),v=Object(E.a)(O,2),b=v[0],_=v[1],S=Object(a.useState)(null),T=Object(E.a)(S,2),g=T[0],C=T[1],w=Object(a.useState)(!1),A=Object(E.a)(w,2),B=A[0],N=A[1],j=Object(a.useState)(""),k=Object(E.a)(j,2),P=k[0],R=k[1],F=function(){h(!1),i()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,r.a.createElement(D,{handleTableRowClick:function(e,n){e.persist(),e.stopPropagation(),e.target.matches(".delete")?function(e){_(!0),C(e)}(n):e.target.matches(".done")?function(e){o(e)}(n):e.target.matches(".edit")?function(e){c(e),h(!0)}(n):e.target.matches(".re-open")?function(e){l(e)}(n):function(e){var n=t.find((function(t){return t.id===e})),a=r.a.createElement("div",null,r.a.createElement("p",null,"Title: ",n.title),r.a.createElement("p",null,"Description: ",n.description),r.a.createElement("p",null,"Created At: ",n.createdAt),r.a.createElement("p",null,"Due Date: ",n.dueDate),r.a.createElement("p",null,"Priority: ",n.priority),r.a.createElement("p",null,"Current State: ",!0===n.currentState?"Done":"Open"));R(a),N(!0)}(n)}})),r.a.createElement(y,{show:p,onDismiss:F,title:"Edit",content:r.a.createElement(f,{type:"edit",handleCancel:F,handleFormSubmit:function(e){console.log(e),s(e),F()}})}),r.a.createElement(y,{show:b,onDismiss:function(){return _(!1)},title:"Delete",content:r.a.createElement("p",null,"Are you sure you want to Delete"),actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{name:"Yes! I'm sure",onClick:function(){n(g),C(null),_(!1)},class_:"delete"}),r.a.createElement(u,{name:"No! Keep it",onClick:function(){return _(!1)},class_:"warning"}))}),r.a.createElement(y,{show:B,onDismiss:function(){return N(!1)},title:"View Item",content:P,actions:r.a.createElement(u,{name:"Okay!",onClick:function(){return N(!1)}})}))})),j=function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement(p,null),r.a.createElement(N,null)))},k=Object(c.b)(null,(function(e){return{addTodo:function(t){return e(function(e){return function(t,n){n().isFetching||w(t,{type:"ADD_TODO",payload:e})}}(t))}}}))((function(e){var t=e.addTodo,n=Object(a.useState)(!1),l=Object(E.a)(n,2),o=l[0],c=l[1];return r.a.createElement("div",{className:"add-todo"},r.a.createElement(u,{name:"+",class_:"todo-btn",onClick:function(){return c(!0)}}),r.a.createElement(y,{show:o,title:"Add Todo",content:r.a.createElement(f,{formId:"addForm",handleFormSubmit:function(e){console.log("Form Submitted",e),c(!1),t(e)},handleCancel:function(){return c(!1)}}),onDismiss:function(){return c(!1)}}))}));n(26);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(d,null),r.a.createElement(j,null),r.a.createElement(k,null))},R=n(6),F=n(14),I=Object(R.c)({todos:A,formEdit:B,filter:s,sort:m,isFetching:g});var L=Object(R.d)(I,Object(R.a)(F.a));o.a.render(r.a.createElement(c.a,{store:L},r.a.createElement(P,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9552cbbe.chunk.js.map