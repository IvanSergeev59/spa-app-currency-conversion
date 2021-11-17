(this["webpackJsonpspa-app-currency-conversion"]=this["webpackJsonpspa-app-currency-conversion"]||[]).push([[0],{35:function(e,r,n){},42:function(e,r,n){},43:function(e,r,n){},45:function(e,r,n){"use strict";n.r(r);var t=n(0),c=n.n(t),u=n(17),a=n.n(u),s=n(6),o=n(7),i=n(11),l=n(10),d=n(14),j=(n(35),n(1)),h=function(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h3",{className:"header__h3",children:Object(j.jsx)(d.b,{className:"header__a",to:"/",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"})}),Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)(d.b,{className:"header__a",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(j.jsx)(d.b,{className:"header__a",to:"/current-exchange-rate/",children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"})]})]})},p=n(46),b=n(8),y=(n(42),function(e){var r=e.sumTotalUsd,n=e.state.calculations,t=n.exchangeCurrency_1,c=n.userCurrency,u=n.exchangeCurrency_2,a=n.userSumInputMoney_2,s=n.userSumInputMoney_1,o=n.errorUserWrongInput;return Object(j.jsxs)("div",{className:"currency-list",children:[Object(j.jsxs)("div",{className:"form",children:[Object(j.jsxs)(p.a.Group,{className:"currency-list-margin",children:[Object(j.jsx)(p.a.Label,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(j.jsx)(p.a.Control,{onChange:function(e){var n=e.target.value;return r(n)},id:"only_num",type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]}),Object(j.jsx)("p",{className:"currency-list__error",children:o}),Object(j.jsxs)("p",{className:"result-block",children:[c," in ",t,":"]}),Object(j.jsx)("p",{className:"result-field",children:s})]}),Object(j.jsxs)("p",{className:"result-block",children:[c," in ",u,":"]}),Object(j.jsx)("p",{className:"result-field",children:a})]})}),O=function(e){Object(i.a)(n,e);var r=Object(l.a)(n);function n(){return Object(s.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,r=e.sumTotalUsd,n=e.state;return Object(j.jsx)(y,{sumTotalUsd:r,state:n})}}]),n}(t.Component),f=Object(b.b)((function(e){return{state:e}}),(function(e){return{sumTotalUsd:function(r){return e(function(e){return{type:"SUM_TOTAL",payload:e}}(r))}}}))(O),_=function(){return Object(j.jsx)(t.Fragment,{children:Object(j.jsx)(f,{})})},x=(n(43),Object(b.b)((function(e){return{state:e}}))((function(e){var r=e.state,n=r.calculations,c=n.exchangeCurrency_1,u=n.exchangeCurrency_2,a=n.exchangeCurrency_1_value,s=n.exchangeCurrency_2_value,o=r.currentCurrencies,i=o.default_exchangeCurrency_1_value,l=o.default_exchangeCurrency_2_value;return Object(j.jsxs)(t.Fragment,{children:[Object(j.jsx)("h3",{className:"pages pages__h3",children:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442:"}),Object(j.jsxs)("div",{className:"pages__currency-window",children:[Object(j.jsxs)("p",{className:"pages__currency-window_p",children:[c,":"]}),Object(j.jsxs)("p",{className:"pages__currency-window_p",children:[i,a]})]}),Object(j.jsxs)("div",{className:"pages__currency-window",children:[Object(j.jsxs)("p",{className:"pages__currency-window_p",children:[u,":"]}),Object(j.jsxs)("p",{className:"pages__currency-window_p",children:[l,s]})]})]})}))),C=function(e){var r=e.userChangeCurrency,n=e.hideDefaultCurrencies;return Object(j.jsxs)("div",{className:"currency-list currency-list-user",children:[Object(j.jsx)("p",{className:"currency-list-_p",children:"\u0412\u0430\u0448\u0430 \u0432\u0430\u043b\u044e\u0442\u0430:"}),Object(j.jsxs)(p.a.Select,{onChange:function(e){var t=e.target.value;return n(),r(t)},"aria-label":"Default select example",children:[Object(j.jsx)("option",{value:"USD",children:"USD"}),Object(j.jsx)("option",{value:"EURO",children:"EURO"}),Object(j.jsx)("option",{value:"RUB",children:"RUB"})]})]})},v=function(e){Object(i.a)(n,e);var r=Object(l.a)(n);function n(){return Object(s.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,r=e.userChangeCurrency,n=e.hideDefaultCurrencies;return Object(j.jsx)(C,{userChangeCurrency:r,hideDefaultCurrencies:n})}}]),n}(t.Component),m=Object(b.b)((function(e){return{userChangeCurrency:e.userChangeCurrency}}),(function(e,r){return{userChangeCurrency:function(r){return e(function(e){return{type:"CHANGE_CURRENCY",payload:e}}(r))},hideDefaultCurrencies:function(){return e({type:"HIDE_DEFAULT_CURRENCIES"})}}}))(v),g=n(3),U=n(2),E=c.a.createContext(),R=E.Provider,T=E.Consumer,N=function(){return function(e){return function(r){return Object(j.jsx)(T,{children:function(n){return Object(j.jsx)(e,Object(U.a)(Object(U.a)({},r),{},{currencyService:n}))}})}}},S=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(e){return r.reduceRight((function(e,r){return r(e)}),e)}},w=S,D=function(e){Object(i.a)(n,e);var r=Object(l.a)(n);function n(){return Object(s.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchCurrencies()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(m,{}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{path:"/spa-app-currency-conversion/",element:Object(j.jsx)(_,{})}),Object(j.jsx)(g.a,{path:"/*",element:Object(j.jsx)(_,{})}),Object(j.jsx)(g.a,{path:"/current-exchange-rate/",element:Object(j.jsx)(x,{})})]})]})}}]),n}(t.Component),I=w(N(),Object(b.b)((function(e){return e}),(function(e,r){var n=r.currencyService;return{fetchCurrencies:function(){return e(function(e){return function(){return function(r){r({type:"CURRENCIES_REQUESTED"}),e.getCurrencies().then((function(e){return r({type:"CURRENCIES_LOADED",payload:e})})).catch()}}}(n)())}}})))(D),F=function(e,r){if(void 0===e)return{userSumInputMoney_1:"0",userSumInputMoney_2:"0",total:"0",errorUserWrongInput:" ",userCurrency:"USD",exchangeCurrency_1:"EURO",exchangeCurrency_2:"RUB",exchangeCurrency_1_value:"",exchangeCurrency_2_value:"",usdToRub:"70"};switch(r.type){case"SUM_TOTAL":return function(e,r){var n=e.currentCurrencies,t=n.usdToRub,c=n.usdToEuro,u=n.euroToRub,a=n.euroToUsd,s=n.rubToEuro,o=n.rubToUsd,i=e.calculations.userCurrency,l=function(e,r,n,t){return{userSumInputMoney_1:e,userSumInputMoney_2:r,total:n,errorUserWrongInput:t}};if(/^([0-9]+)([.,]?)([0-9]*)$/.test(r.payload)&r.payload>=0)return Object(U.a)(Object(U.a)({},e.calculations),function(e){return"USD"===e?{onCalculateOfUserCurrency:l((r.payload*c).toFixed(4),(r.payload*t).toFixed(4),r.payload," ")}:"EURO"===e?(console.log(r.payload,a),{onCalculateOfUserCurrency:l((r.payload*a).toFixed(4),(r.payload*u).toFixed(4),r.payload," ")}):{onCalculateOfUserCurrency:l((r.payload*o).toFixed(4),(r.payload*s).toFixed(4),r.payload," ")}}(i).onCalculateOfUserCurrency);return Object(U.a)(Object(U.a)({},e.calculations),{},{userSumInputMoney_1:0,userSumInputMoney_2:0,total:0,errorUserWrongInput:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"})}(e,r);case"UPDATE_CURRENCY":return Object(U.a)(Object(U.a)(Object(U.a)({},e.currentCurrencies),r.payload),{},{exchangeCurrency_1_value:r.payload.usdToEuro,exchangeCurrency_2_value:r.payload.usdToRub});case"CHANGE_CURRENCY":return function(e,r){var n=e.currentCurrencies,t=n.rubToUsd,c=n.euroToRub,u=n.usdToEuro,a=n.euroToUsd,s=n.usdToRub,o=n.rubToEuro,i=e.calculations.total,l=function(e,r,n,t,c,u){return{exchangeCurrency_1:e,exchangeCurrency_2:r,exchangeCurrency_1_value:n,exchangeCurrency_2_value:t,userSumInputMoney_1:c,userSumInputMoney_2:u}};return Object(U.a)(Object(U.a)({},e.calculations),{},{userCurrency:r.payload},("USD"===r.payload?{currentParams:l("EURO","RUB",u,s,(i*u).toFixed(4),(i*s).toFixed(4))}:"EURO"===r.payload?{currentParams:l("USD","RUB",a,c,(i*a).toFixed(4),(i*c).toFixed(4))}:{currentParams:l("USD","EUR",t,o,(i*t).toFixed(4),(i*o).toFixed(4))}).currentParams)}(e,r);default:return e.calculations}},k=function(e,r){if(void 0===e)return{usdToEuro:"0",euroToRub:"70",euroToUsd:"0",rubToEuro:"70",rubToUsd:"0",ololo:""};switch(r.type){case"CURRENCIES_REQUESTED":return Object(U.a)(Object(U.a)({},e.currentCurrencies),{},{default_exchangeCurrency_1_value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",default_exchangeCurrency_2_value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"});case"CURRENCIES_LOADED":return Object(U.a)(Object(U.a)(Object(U.a)({},e.currentCurrencies),r.payload),{},{default_exchangeCurrency_1_value:r.payload.usdToEuro,default_exchangeCurrency_2_value:r.payload.usdToRub});case"HIDE_DEFAULT_CURRENCIES":return Object(U.a)(Object(U.a)({},e.currentCurrencies),{},{default_exchangeCurrency_1_value:r.payload,default_exchangeCurrency_2_value:r.payload});default:return e.currentCurrencies}},A=function(e,r){return{currentCurrencies:k(e,r),calculations:F(e,r)}},M=n(23),B=n(29),L=Object(M.b)(A,Object(M.a)(B.a,(function(){return function(e){return function(r){return e("string"===typeof r?{type:r}:r)}}}),(function(e){e.getState;return function(e){return function(r){return e(r)}}})));L.dispatch((function(e){setTimeout((function(){return e({type:"DELATED_ACTION"})}),2e3)}));var P=L,H=n(16),V=n.n(H),W=n(24),G=function(){function e(){var r=this;Object(s.a)(this,e),this.apiBase="https://www.cbr-xml-daily.ru/daily_json.js",this.getCurrencies=Object(W.a)(V.a.mark((function e(){var n,t,c,u;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrency();case 2:return n=e.sent,t=n.Valute.USD.Value.toFixed(4),c=n.Valute.EUR.Value.toFixed(4),u={usdToRub:t,euroToRub:c,usdToEuro:(t/c).toFixed(4),euroToUsd:(c/t).toFixed(4),rubToEuro:(1/c).toFixed(4),rubToUsd:(1/t).toFixed(4)},e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})))}return Object(o.a)(e,[{key:"getCurrency",value:function(){var e=Object(W.a)(V.a.mark((function e(){var r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.apiBase);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(this.apiBase)+" , received ".concat(r.status));case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Y=G,J=function(e){Object(i.a)(n,e);var r=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,c=new Array(t),u=0;u<t;u++)c[u]=arguments[u];return(e=r.call.apply(r,[this].concat(c))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h2",{children:"Error"}):this.props.children}}]),n}(t.Component),Q=J,$=new Y;a.a.render(Object(j.jsx)(b.a,{store:P,children:Object(j.jsx)(Q,{children:Object(j.jsx)(R,{value:$,children:Object(j.jsx)(d.a,{children:Object(j.jsx)(I,{})})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.07490be1.chunk.js.map