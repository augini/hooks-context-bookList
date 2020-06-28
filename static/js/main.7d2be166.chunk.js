(this["webpackJsonpreact-book-project"]=this["webpackJsonpreact-book-project"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),l=(a(12),a(2)),u=a(6),i=a(15),s=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(u.a)(e),[{title:t.book.title,author:t.book.author,id:Object(i.a)()}]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.book.id}));default:return e}},m=Object(n.createContext)(),b=function(e){var t=Object(n.useReducer)(s,[],(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),r.a.createElement(m.Provider,{value:{books:o,dispatch:c}},e.children)},d=function(){var e=Object(n.useContext)(m).books;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"Ninja Reading List"),r.a.createElement("p",null,"Currently you have ",e.length," books to get through"))},h=function(e){var t=e.book,a=Object(n.useContext)(m).dispatch;return r.a.createElement("li",{onClick:function(){var e;e=t.id,a({type:"REMOVE_BOOK",book:{id:e}})}},r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"author"},t.author))},p=function(){var e=Object(n.useContext)(m).books;return e.length?r.a.createElement("div",{className:"book-list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(h,{key:e.id,book:e})})))):r.a.createElement("div",{className:"empty"},r.a.createElement("p",null," No books to read. Hello free time !"))},v=function(){var e=Object(n.useContext)(m).dispatch,t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),s=i[0],b=i[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:o,author:s}}),b(""),c("")}},r.a.createElement("input",{type:"text",placeholder:"Title",value:o,onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"Author",value:s,onChange:function(e){return b(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"}))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7d2be166.chunk.js.map