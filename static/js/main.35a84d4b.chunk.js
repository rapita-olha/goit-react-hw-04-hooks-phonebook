(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(n,e,t){n.exports={container:"Container_container__2ZMRl"}},25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r,a,c=t(0),o=t.n(c),i=t(10),l=t.n(i),s=t(6),u=t(4),b=t(2),d=t(17),j=t(3),x=t(13),m=t.n(x),p=t(1);function O(n){var e=n.children;return Object(p.jsx)("div",{className:m.a.container,children:e})}var f,h,g=j.a.label(r||(r=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n  font-size: 25px;\n  cursor: pointer;\n"]))),v=j.a.input(a||(a=Object(b.a)(["\n  max-width: 200px;\n  height: 10px;\n  margin-left: 30px;\n  padding: 20px 10px;\n  background: #bebebe;\n  color: #036103;\n  border: 2px solid red;\n  border-radius: 10px;\n"])));function k(n){var e=n.value,t=n.onChange;return Object(p.jsxs)(g,{children:["Find contacts by name",Object(p.jsx)(v,{type:"text",name:"filter",value:e,onChange:t})]})}var C,y,S=j.a.button(f||(f=Object(b.a)(["\n  padding: 5px 10px;\n  width: 100px;\n  margin-top: 10px;\n  background-color: #ff1414;\n  color: black;\n  border-radius: 5px;\n  transition: background-color 200ms linear, color 500ms linear;\n  &:hover,\n  &:focus {\n    background-color: #c9baba;\n    color: red;\n    transition: background-color 200ms linear, color 500ms linear;\n  }\n"]))),w=j.a.p(h||(h=Object(b.a)(["\n  font-size: 25px;\n"])));function z(n){var e=n.onClick,t=n.contact,r=t.name,a=t.number;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(w,{children:[r,": ",a]}),Object(p.jsx)(S,{type:"button",onClick:function(){e(a)},children:"delete"})]})}var A=j.a.form(C||(C=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  padding: 20px 70px;\n  border: 2px solid red;\n  border-radius: 10px;\n  background: orange;\n"]))),J=Object(j.a)(S)(y||(y=Object(b.a)(["\n  background-color: #278a27;\n  margin: 0 auto;\n  margin-top: 10px;\n  width: 150px;\n  &:hover,\n  &:focus {\n    color: #006900;\n  }\n"])));var N,Z,q=function(n){var e=n.onSubmit,t=Object(c.useState)(""),r=Object(u.a)(t,2),a=r[0],o=r[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),s=l[0],b=l[1],d=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":o(r);break;case"number":b(r)}};return Object(p.jsxs)(A,{onSubmit:function(n){n.preventDefault(),e(a,s),b(""),o("")},children:[Object(p.jsxs)(g,{children:["Name",Object(p.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:d,value:a,required:!0})]}),Object(p.jsxs)(g,{children:["Number",Object(p.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:d,value:s,required:!0})]}),Object(p.jsx)(J,{type:"submit",children:"Add contact"})]})},I=j.a.ul(N||(N=Object(b.a)(["\n  list-style: none;\n  text-align: center;\n  color: #722317;\n  font-weight: bold;\n"]))),M=j.a.li(Z||(Z=Object(b.a)(["\n  &:not(:last-child) {\n    margin-bottom: 25px;\n  }\n"])));var _,B,E,F=function(n){var e=n.contacts,t=n.onClick;return Object(p.jsx)(I,{children:Object(s.a)(e).sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){return Object(p.jsx)(M,{children:Object(p.jsx)(z,{contact:n,onClick:t})},n.id)}))})};var L=j.a.h1(_||(_=Object(b.a)(["\n  margin-bottom: 40px;\n  font-size: 40px;\n  text-align: center;\n"]))),T=j.a.h2(B||(B=Object(b.a)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 35px;\n"]))),D=j.a.div(E||(E=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));var P=function(){var n=function(n,e){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem(n)))&&void 0!==t?t:e})),r=Object(u.a)(t,2),a=r[0],o=r[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[n,a]),[a,o]}("contacts",[]),e=Object(u.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],l=o[1],b=function(n,e){return n.length>0?n.filter((function(n){return n.name.toLowerCase().includes(e.trim().toLowerCase())})):null}(t,i);return Object(p.jsxs)(O,{children:[Object(p.jsx)(L,{children:"Phonebook"}),Object(p.jsx)(q,{onSubmit:function(n,e){t.some((function(t){return t.name===n||t.number===e}))?alert("".concat(n," is already in contacts")):r((function(t){return[].concat(Object(s.a)(t),[{id:Object(d.a)(),name:n,number:e}])}))}}),Object(p.jsxs)(D,{children:[Object(p.jsx)(T,{children:"Contacts"}),Object(p.jsx)(k,{value:i,onChange:function(n){var e=n.currentTarget.value;l(e)}}),b&&Object(p.jsx)(F,{contacts:b,onClick:function(n){r((function(e){var t=e.filter((function(e){return n!==e.number}));return Object(s.a)(t)})),l("")}})]})]})};t(25);l.a.render(Object(p.jsx)(P,{}),document.querySelector("#root")),l.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.35a84d4b.chunk.js.map