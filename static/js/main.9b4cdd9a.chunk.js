(this.webpackJsonpcryptoinfo=this.webpackJsonpcryptoinfo||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),s=t(13),r=t.n(s),i=t(4),o=t(14),l=t.n(o),p=(t(37),t(38),t(0)),j=function(e){var c=e.name,t=e.price,a=e.symbol,n=e.marketcap,s=e.volume,r=e.image,i=e.priceChange;return Object(p.jsx)("div",{className:"coin-container",children:Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsxs)("div",{className:"coin",children:[Object(p.jsx)("img",{src:r,alt:"crypto"}),Object(p.jsx)("h1",{children:c}),Object(p.jsx)("p",{className:"coin-symbol",children:a})]}),Object(p.jsxs)("div",{className:"coin-data",children:[Object(p.jsxs)("p",{className:"coin-price",children:["R$ ",t]}),Object(p.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),i<0?Object(p.jsxs)("p",{className:"coin-percent red",children:[i.toFixed(2),"%"]}):Object(p.jsxs)("p",{className:"coin-percent green",children:[i.toFixed(2),"%"]}),Object(p.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",n.toLocaleString()]})]})]})})};var m=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=50&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(p.jsxs)("div",{className:"coin-app",children:[Object(p.jsxs)("div",{className:"coin-search",children:[Object(p.jsx)("h1",{className:"coin-text",children:"Busque por uma criptomoeda"}),Object(p.jsx)("form",{children:Object(p.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){m(e.target.value)},placeholder:"Pesquisar"})})]}),d.map((function(e){return Object(p.jsx)(j,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]})};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9b4cdd9a.chunk.js.map