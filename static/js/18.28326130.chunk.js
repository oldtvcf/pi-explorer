webpackJsonp([18],{420:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(114),m=a(151),o=a.n(m),u=a(10),d=a(247),s=a.n(d),p=a(248),b=a.n(p),E=a(161),h=a(82),v=a(115),f=a(81),y=a(51),j=a(116),R=function(e){var t=e.compact,a=e.server,n=e.parentRenderTimestamp,c=e.records,l=e.account;return r.a.createElement("div",null,r.a.createElement(o.a,{id:"payment-table",className:"table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(u.b,{id:"account"})),r.a.createElement("th",null,r.a.createElement(u.b,{id:"payment"})),!1===t&&r.a.createElement("th",null,r.a.createElement(u.b,{id:"transaction"})),!1===t&&r.a.createElement("th",null,r.a.createElement(u.b,{id:"type"})),r.a.createElement("th",null,r.a.createElement(u.b,{id:"time"})),r.a.createElement("th",null))),r.a.createElement("tbody",null,c.map(function(e){return r.a.createElement(E.default,{key:e.id,compact:t,op:e,opURLFn:a.opURL,parentRenderTimestamp:n})}))),r.a.createElement("div",{className:"text-center",id:"csv-export"},r.a.createElement(g,{server:a,account:l})))};R.propTypes={compact:l.a.bool,parentRenderTimestamp:l.a.number,records:l.a.array.isRequired,server:l.a.object.isRequired};var O=function(e){return e.time=e.created_at,s()(e,function(e,t){return b()(t)})},w=function(e){var t=e.account,a=e.tx,n=e.limit,r=e.server,c=r.payments();return a&&c.forTransaction(a),t&&c.forAccount(t),c.limit(n),c.order("desc"),c.call()},T=function(e){return e.server.payments()},g=Object(v.withDataFetchingAllContainer)(w)(j.default),x=Object(i.a)(Object(f.withPaging)(),Object(h.withDataFetchingContainer)(w,O,T),Object(y.withSpinner)());t.default=x(R)}});
//# sourceMappingURL=18.28326130.chunk.js.map