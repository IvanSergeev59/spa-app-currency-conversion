(this["webpackJsonpspa-app-currency-conversion"]=this["webpackJsonpspa-app-currency-conversion"]||[]).push([[0],{34:function(e,r,t){},36:function(e,r,t){},37:function(e,r,t){"use strict";t.r(r);var c=t(0),n=t(9),s=t.n(n),a=t(8),u=(t(34),t(1)),l=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h2",{className:"h2",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432\u0430\u043b\u044e\u0442"})})},i=t(17),o=t(18),j=t(24),d=t(22),b=t(40),O=(t(36),function(e){e.currentUsd,e.totalUsd;var r=e.sumTotalUsd,t=e.sumUsd,c=e.userCurrency;return Object(u.jsxs)("div",{className:"currency-list",children:[Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsxs)(b.a.Label,{children:[c," in RUB"]}),Object(u.jsx)(b.a.Control,{onChange:function(e){var t=e.target.value;return r(t)},type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]})}),Object(u.jsx)("p",{className:"result-block",children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(u.jsx)("p",{className:"result-field",children:t})]})}),h=function(e){var r=e.userChangeCurrency;return Object(u.jsxs)("div",{class:"currency-list currency-list-user",children:[Object(u.jsx)("p",{class:"currency-list-_p",children:"\u0412\u0430\u0448\u0430 \u0432\u0430\u043b\u044e\u0442\u0430:"}),Object(u.jsxs)(b.a.Select,{onChange:function(e){var t=e.target.value;return console.log(t),r(t)},"aria-label":"Default select example",children:[Object(u.jsx)("option",{value:"USD",children:"USD"}),Object(u.jsx)("option",{value:"EURO",children:"EURO"}),Object(u.jsx)("option",{value:"RUB",children:"RUB"})]})]})},p=function(e){Object(j.a)(t,e);var r=Object(d.a)(t);function t(){return Object(i.a)(this,t),r.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,r=e.sumTotalUsd,t=e.sumUsd,n=e.userCurrency,s=e.userChangeCurrency;return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(h,{userChangeCurrency:s}),Object(u.jsx)(O,{sumUsd:t,sumTotalUsd:r,userCurrency:n})]})}}]),t}(c.Component),U=Object(a.b)((function(e){var r=e.currentUsd,t=e.currentRUB,c=e.totalUsd,n=e.userCurrency,s=e.currentEURO,a=0;switch(n){case"USD":a=r*c;break;case"EURO":a=s*c;break;case"RUB":a=t*c;break;default:a=0}return{sumUsd:a,userCurrency:n}}),(function(e,r){return{sumTotalUsd:function(r){return e(function(e){return{type:"SUM_TOTAL",payload:e}}(r))},userChangeCurrency:function(r){return e(function(e){return{type:"CHANGE_CURRENCY",payload:e}}(r))}}}))(p),m=function(){return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(U,{})})},y=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{}),Object(u.jsx)(m,{})]})},x=t(23),f=t(2),C={currentUsd:"70",totalUsd:"0",sumUsd:"0",currentEURO:"90",currentRUB:"1",userCurrency:"USD"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SUM_TOTAL":return Object(f.a)(Object(f.a)({},e),{},{totalUsd:r.payload});case"CHANGE_CURRENCY":return Object(f.a)(Object(f.a)({},e),{},{userCurrency:r.payload});default:return Object(f.a)({},e)}},R=t(20),g=Object(R.a)(v);s.a.render(Object(u.jsx)(a.a,{store:g,children:Object(u.jsx)(x.a,{children:Object(u.jsx)(y,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.24dbead9.chunk.js.map