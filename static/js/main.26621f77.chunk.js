(this["webpackJsonpspa-app-currency-conversion"]=this["webpackJsonpspa-app-currency-conversion"]||[]).push([[0],{34:function(e,r,n){},41:function(e,r,n){},42:function(e,r,n){},44:function(e,r,n){"use strict";n.r(r);var u=n(0),c=n(17),t=n.n(c),a=n(8),s=n(9),o=n(13),i=n(12),l=n(14),y=(n(34),n(1)),d=function(){return Object(y.jsxs)("header",{className:"header",children:[Object(y.jsx)("h3",{className:"header__h3",children:Object(y.jsx)(l.b,{className:"header__a",to:"/",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"})}),Object(y.jsxs)("div",{className:"header__container",children:[Object(y.jsx)(l.b,{className:"header__a",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(y.jsx)(l.b,{className:"header__a",to:"/current-exchange-rate/",children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"})]})]})},p=n(45),j=n(6),b=(n(41),function(e){var r=e.sumTotalUsd,n=e.errorUserWrongInput,u=(e.userSumInputMoney,e.userCurrency),c=e.exchangeCurrency_1,t=e.exchangeCurrency_2,a=e.userSumInputMoney_1,s=e.userSumInputMoney_2;return Object(y.jsxs)("div",{className:"currency-list",children:[Object(y.jsxs)("div",{className:"form",children:[Object(y.jsxs)(p.a.Group,{className:"currency-list-margin",children:[Object(y.jsx)(p.a.Label,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(y.jsx)(p.a.Control,{onChange:function(e){var n=e.target.value;return r(n)},id:"only_num",type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]}),Object(y.jsx)("p",{className:"currency-list__error",children:n}),Object(y.jsxs)("p",{className:"result-block",children:[u," in ",c,":"]}),Object(y.jsx)("p",{className:"result-field",children:a})]}),Object(y.jsxs)("p",{className:"result-block",children:[u," in ",t,":"]}),Object(y.jsx)("p",{className:"result-field",children:s})]})}),h=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,r=e.sumTotalUsd,n=e.userCurrency,u=e.exchangeCurrency_1,c=e.exchangeCurrency_2,t=e.userSumInputMoney_1,a=e.errorUserWrongInput,s=e.userSumInputMoney_2;return Object(y.jsx)(b,{sumTotalUsd:r,errorUserWrongInput:a,exchangeCurrency_1:u,exchangeCurrency_2:c,userCurrency:n,userSumInputMoney_1:t,userSumInputMoney_2:s})}}]),n}(u.Component),C=Object(j.b)((function(e){var r=e.currentCurrencies,n=r.errorUserWrongInput;return{userSumInputMoney_1:r.userSumInputMoney_1,userSumInputMoney_2:r.userSumInputMoney_2,errorUserWrongInput:n,userCurrency:r.userCurrency,exchangeCurrency_1:r.exchangeCurrency_1,exchangeCurrency_2:r.exchangeCurrency_2}}),(function(e,r){return{sumTotalUsd:function(r){return e(function(e){return{type:"SUM_TOTAL",payload:e}}(r))}}}))(h),x=function(){return Object(y.jsx)(u.Fragment,{children:Object(y.jsx)(C,{})})},O=(n(42),Object(j.b)((function(e){var r=e.currentCurrencies,n=r.currentUsdToRub,u=r.currentUsdToEuro,c=r.currentEuroToRub,t=r.currentEuroToUsd,a=r.currentRubToEuro,s=r.currentRubToUsd,o=r.userCurrency,i=r.exchangeCurrency_1,l=r.exchangeCurrency_2;switch(o){case"USD":return{exchangeCurrency_1:i,exchangeCurrency_2:l,currency1:u,currency2:n};case"EURO":return{exchangeCurrency_1:i,exchangeCurrency_2:l,currency1:t,currency2:c};case"RUB":return{exchangeCurrency_1:i,exchangeCurrency_2:l,currency1:s,currency2:a};default:return null}}))((function(e){var r=e.currency1,n=e.currency2,c=e.exchangeCurrency_1,t=e.exchangeCurrency_2;return Object(y.jsxs)(u.Fragment,{children:[Object(y.jsx)("h3",{className:"pages pages__h3",children:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442:"}),Object(y.jsxs)("div",{className:"pages__currency-window",children:[Object(y.jsxs)("p",{className:"pages__currency-window_p",children:[c,":"]}),Object(y.jsx)("p",{className:"pages__currency-window_p",children:r})]}),Object(y.jsxs)("div",{className:"pages__currency-window",children:[Object(y.jsxs)("p",{className:"pages__currency-window_p",children:[t,":"]}),Object(y.jsx)("p",{className:"pages__currency-window_p",children:n})]})]})}))),_=function(e){var r=e.userChangeCurrency;return Object(y.jsxs)("div",{className:"currency-list currency-list-user",children:[Object(y.jsx)("p",{className:"currency-list-_p",children:"\u0412\u0430\u0448\u0430 \u0432\u0430\u043b\u044e\u0442\u0430:"}),Object(y.jsxs)(p.a.Select,{onChange:function(e){var n=e.target.value;return r(n)},"aria-label":"Default select example",children:[Object(y.jsx)("option",{value:"USD",children:"USD"}),Object(y.jsx)("option",{value:"EURO",children:"EURO"}),Object(y.jsx)("option",{value:"RUB",children:"RUB"})]})]})},m=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.userChangeCurrency;return Object(y.jsx)(_,{userChangeCurrency:e})}}]),n}(u.Component),g=Object(j.b)((function(e){return{userChangeCurrency:e.userChangeCurrency}}),(function(e,r){return{userChangeCurrency:function(r){return e(function(e){return{type:"CHANGE_CURRENCY",payload:e}}(r))}}}))(m),U=n(16),f=n.n(U),v=n(23),R=function(){function e(){var r=this;Object(a.a)(this,e),this.apiBase="https://www.cbr-xml-daily.ru/daily_json.js",this.getCurrencies=Object(v.a)(f.a.mark((function e(){var n,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrency();case 2:return n=e.sent,u={currentUsdToRub:n.Valute.USD.Value,currentEuroToRub:n.Valute.EUR.Value},console.log(u),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})))}return Object(s.a)(e,[{key:"getCurrency",value:function(){var e=Object(v.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.apiBase);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(this.apiBase)+" , received ".concat(n.status));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),e}(),T=R,E=n(3),S=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var u=arguments.length,c=new Array(u),t=0;t<u;t++)c[t]=arguments[t];return(e=r.call.apply(r,[this].concat(c))).currencyService=new T,e.loadingCurrentCurrency=function(){e.currencyService.getCurrencies().then(e.props.onLoadCurrentCurrency).catch()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.loadingCurrentCurrency()}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(d,{}),Object(y.jsx)(g,{}),Object(y.jsxs)(E.c,{children:[Object(y.jsx)(E.a,{path:"/spa-app-currency-conversion/",element:Object(y.jsx)(x,{})}),Object(y.jsx)(E.a,{path:"/*",element:Object(y.jsx)(x,{})}),Object(y.jsx)(E.a,{path:"/current-exchange-rate/",element:Object(y.jsx)(O,{})})]})]})}}]),n}(u.Component),I=Object(j.b)((function(e){return e}),(function(e,r){return{onLoadCurrentCurrency:function(r){return e(function(e){return{type:"UPDATE_CURRENCY",payload:e}}(r))}}}))(S),M=n(2),N=function(e,r){if(void 0===e)return{currentUsdToRub:"70",currentUsdToEuro:"0",currentEuroToRub:"70",currentEurotoUsd:"0",currentRubToEuro:"70",currentRubToUsd:"0",userSumInputMoney_1:"0",userSumInputMoney_2:"0",userCurrency:"USD",exchangeCurrency_1:"EURO",exchangeCurrency_2:"RUB",total:"0",errorUserWrongInput:" "};switch(r.type){case"SUM_TOTAL":return function(e,r){var n=e.currentCurrencies,u=n.userCurrency,c=n.currentUsdToRub,t=n.currentUsdToEuro,a=n.currentEuroToRub,s=n.currentEuroToUsd,o=n.currentRubToEuro,i=n.currentRubToUsd;return/^(0|[1-9]\d*)$/.test(r.payload)&r.payload>=0?"USD"===u?Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userSumInputMoney_1:(r.payload*t).toFixed(4),userSumInputMoney_2:(r.payload*c).toFixed(4),total:r.payload,errorUserWrongInput:" "}):"EURO"===u?Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userSumInputMoney_1:(r.payload*s).toFixed(4),userSumInputMoney_2:(r.payload*a).toFixed(4),total:r.payload,errorUserWrongInput:" "}):Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userSumInputMoney_1:(r.payload*i).toFixed(4),userSumInputMoney_2:(r.payload*o).toFixed(4),total:r.payload,errorUserWrongInput:" "}):Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userSumInputMoney_1:0,userSumInputMoney_2:0,total:0,errorUserWrongInput:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})}(e,r);case"CHANGE_CURRENCY":return function(e,r){return"USD"===r.payload?Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userCurrency:r.payload,exchangeCurrency_1:"EURO",exchangeCurrency_2:"RUB",userSumInputMoney_1:(e.currentCurrencies.total*e.currentCurrencies.currentUsdToEuro).toFixed(4),userSumInputMoney_2:(e.currentCurrencies.total*e.currentCurrencies.currentUsdToRub).toFixed(4)}):"EURO"===r.payload?Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userCurrency:r.payload,exchangeCurrency_1:"USD",exchangeCurrency_2:"RUB",userSumInputMoney_1:(e.currentCurrencies.total*e.currentCurrencies.currentEuroToUsd).toFixed(4),userSumInputMoney_2:(e.currentCurrencies.total*e.currentCurrencies.currentEuroToRub).toFixed(4)}):Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{userCurrency:r.payload,exchangeCurrency_1:"USD",exchangeCurrency_2:"EUR",userSumInputMoney_1:(e.currentCurrencies.total*e.currentCurrencies.currentRubToUsd).toFixed(4),userSumInputMoney_2:(e.currentCurrencies.total*e.currentCurrencies.currentRubToEuro).toFixed(4)})}(e,r);case"UPDATE_CURRENCY":var n=r.payload,u=n.currentUsdToRub,c=n.currentEuroToRub,t=(u/c).toFixed(5),a=(c/u).toFixed(4),s=(1/c).toFixed(4),o=(1/u).toFixed(4);return Object(M.a)(Object(M.a)({},e.currentCurrencies),{},{currentUsdToRub:u,currentUsdToEuro:t,currentEuroToRub:c,currentEuroToUsd:a,currentRubToEuro:s,currentRubToUsd:o});default:return e.currentCurrencies}},w=function(e,r){return{currentCurrencies:N(e,r)}},F=n(28),k=Object(F.a)(w);t.a.render(Object(y.jsx)(j.a,{store:k,children:Object(y.jsx)(l.a,{children:Object(y.jsx)(I,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.26621f77.chunk.js.map