(this["webpackJsonpspa-app-currency-conversion"]=this["webpackJsonpspa-app-currency-conversion"]||[]).push([[0],{60:function(e,r,n){},61:function(e,r,n){},63:function(e,r,n){"use strict";n.r(r);var c=n(0),t=n(12),u=n.n(t),a=n(13),s=n(14),o=n(24),i=n(23),j=n(40),l=n(65),d=n(66),b=n(1),h=function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsx)(j.a,{bg:"primary",variant:"dark",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(j.a.Brand,{href:"/spa-app-currency-conversion",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"}),Object(b.jsxs)(d.a,{className:"me-auto",children:[Object(b.jsx)(d.a.Link,{href:"/spa-app-currency-conversion",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(b.jsx)(d.a.Link,{href:"/current-exchange-rate/",children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"})]})]})})})},p=n(67),y=n(19),O=(n(60),function(e){e.currentUsd,e.totalUsd;var r=e.sumTotalUsd,n=e.sumUsd,c=e.userCurrency;return Object(b.jsxs)("div",{className:"currency-list",children:[Object(b.jsx)("div",{className:"form",children:Object(b.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsxs)(p.a.Label,{children:[c," in RUB"]}),Object(b.jsx)(p.a.Control,{onChange:function(e){var n=e.target.value;return r(n)},type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",required:!0,pattern:"[0-9]{5,10}"})]})}),Object(b.jsx)("p",{className:"result-block",children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(b.jsx)("p",{className:"result-field",children:n})]})}),C=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,r=e.sumTotalUsd,n=e.sumUsd,c=e.userCurrency;return Object(b.jsx)(O,{sumUsd:n,sumTotalUsd:r,userCurrency:c})}}]),n}(c.Component),x=Object(y.b)((function(e){var r=e.currentCurrencies,n=r.currentUsd,c=r.currentRUB,t=r.totalUsd,u=r.userCurrency,a=r.currentEURO,s=0;switch(u){case"USD":s=(n*t).toFixed(2);break;case"EURO":s=(a*t).toFixed(2);break;case"RUB":s=(c*t).toFixed(2);break;default:s=0}return{sumUsd:s,userCurrency:u}}),(function(e,r){return{sumTotalUsd:function(r){return e(function(e){return{type:"SUM_TOTAL",payload:e}}(r))}}}))(C),U=function(){return Object(b.jsx)(c.Fragment,{children:Object(b.jsx)(x,{})})},f=(n(61),Object(y.b)((function(e){var r=e.currentCurrencies,n=r.currentUsdToRub,c=r.currentUsdToEuro,t=r.currentEuroToRub,u=r.currentEuroToUsd,a=r.currentRubToEuro,s=r.currentRubToUsd,o=r.userCurrency,i=r.exchangeCurrency_1,j=r.exchangeCurrency_2;switch(o){case"USD":return{exchangeCurrency_1:i,exchangeCurrency_2:j,currency1:c,currency2:n};case"EURO":return{exchangeCurrency_1:i,exchangeCurrency_2:j,currency1:u,currency2:t};case"RUB":return{exchangeCurrency_1:i,exchangeCurrency_2:j,currency1:s,currency2:a};default:return null}}))((function(e){var r=e.currency1,n=e.currency2,t=e.exchangeCurrency_1,u=e.exchangeCurrency_2;return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("h3",{className:"pages pages__h3",children:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442:"}),Object(b.jsxs)("div",{className:"pages__currency-window",children:[Object(b.jsxs)("p",{className:"pages__currency-window_p",children:[t,":"]}),Object(b.jsx)("p",{className:"pages__currency-window_p",children:r})]}),Object(b.jsxs)("div",{className:"pages__currency-window",children:[Object(b.jsxs)("p",{className:"pages__currency-window_p",children:[u,":"]}),Object(b.jsx)("p",{className:"pages__currency-window_p",children:n})]})]})}))),g=function(e){var r=e.userChangeCurrency;return Object(b.jsxs)("div",{className:"currency-list currency-list-user",children:[Object(b.jsx)("p",{className:"currency-list-_p",children:"\u0412\u0430\u0448\u0430 \u0432\u0430\u043b\u044e\u0442\u0430:"}),Object(b.jsxs)(p.a.Select,{onChange:function(e){var n=e.target.value;return r(n)},"aria-label":"Default select example",children:[Object(b.jsx)("option",{value:"USD",children:"USD"}),Object(b.jsx)("option",{value:"EURO",children:"EURO"}),Object(b.jsx)("option",{value:"RUB",children:"RUB"})]})]})},m=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.userChangeCurrency;return Object(b.jsx)(g,{userChangeCurrency:e})}}]),n}(c.Component),v=Object(y.b)((function(e){return{userChangeCurrency:e.userChangeCurrency}}),(function(e,r){return{userChangeCurrency:function(r){return e(function(e){return{type:"CHANGE_CURRENCY",payload:e}}(r))}}}))(m),R=n(29),_=n.n(R),E=n(39),T=function(){function e(){var r=this;Object(a.a)(this,e),this.apiBase="https://www.cbr-xml-daily.ru/daily_json.js",this.getCurrencies=Object(E.a)(_.a.mark((function e(){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCurrency();case 2:return n=e.sent,c={currentUsdToRub:n.Valute.USD.Value,currentEuroToRub:n.Valute.EUR.Value},e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))}return Object(s.a)(e,[{key:"getCurrency",value:function(){var e=Object(E.a)(_.a.mark((function e(r){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.apiBase);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(this.apiBase)+" , received ".concat(n.status));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),e}(),w=T,N=n(6),k=function(e){Object(o.a)(n,e);var r=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,t=new Array(c),u=0;u<c;u++)t[u]=arguments[u];return(e=r.call.apply(r,[this].concat(t))).currencyService=new w,e.loadingCurrentCurrency=function(){e.currencyService.getCurrencies().then(e.props.onLoadCurrentCurrency).catch()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.loadingCurrentCurrency()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(v,{}),Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{path:"/spa-app-currency-conversion/",element:Object(b.jsx)(U,{})}),Object(b.jsx)(N.a,{path:"/",element:Object(b.jsx)(U,{})}),Object(b.jsx)(N.a,{path:"/current-exchange-rate/",element:Object(b.jsx)(f,{})})]})]})}}]),n}(c.Component),B=Object(y.b)((function(e){return e}),(function(e,r){return{onLoadCurrentCurrency:function(r){return e(function(e){return{type:"UPDATE_CURRENCY",payload:e}}(r))}}}))(k),S=n(45),D=n(2),A=function(e,r){if(void 0===e)return{currentUsdToRub:"70",currentUsdToEuro:"0",currentEuroToRub:"70",currentEurotoUsd:"0",currentRubToEuro:"70",currentRubToUsd:"0",totalUsd:"0",sumUsd:"0",currentEURO:"90",currentRUB:"1",userCurrency:"USD",exchangeCurrency_1:"EURO",exchangeCurrency_2:"RUB"};switch(r.type){case"SUM_TOTAL":return Object(D.a)(Object(D.a)({},e.currentCurrencies),{},{totalUsd:r.payload});case"CHANGE_CURRENCY":return function(e,r){return"USD"===r.payload?Object(D.a)(Object(D.a)({},e.currentCurrencies),{},{userCurrency:r.payload,exchangeCurrency_1:"EURO",exchangeCurrency_2:"RUB"}):"EURO"===r.payload?Object(D.a)(Object(D.a)({},e.currentCurrencies),{},{userCurrency:r.payload,exchangeCurrency_1:"USD",exchangeCurrency_2:"RUB"}):Object(D.a)(Object(D.a)({},e.currentCurrencies),{},{userCurrency:r.payload,exchangeCurrency_1:"USD",exchangeCurrency_2:"EUR"})}(e,r);case"UPDATE_CURRENCY":var n=r.payload,c=n.currentUsdToRub,t=n.currentEuroToRub,u=c/t,a=t/c,s=1/t,o=1/c;return Object(D.a)(Object(D.a)({},e.currentCurrencies),{},{currentUsdToRub:c,currentUsdToEuro:u,currentEuroToRub:t,currentEuroToUsd:a,currentRubToEuro:s,currentRubToUsd:o});default:return e.currentCurrencies}},L=function(e,r){return{currentCurrencies:A(e,r)}},F=n(44),V=Object(F.a)(L);u.a.render(Object(b.jsx)(y.a,{store:V,children:Object(b.jsx)(S.a,{children:Object(b.jsx)(B,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.fdadca17.chunk.js.map