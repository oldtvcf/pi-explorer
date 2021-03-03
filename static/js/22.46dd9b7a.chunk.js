webpackJsonp([22],{408:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(0),c=a.n(u),s=a(1),o=a.n(s),i=a(10),d=a(258),f=a.n(d),m=a(154),p=a(29),h=a(87),E=a(86),b=a(153),v=a(88),_=a(120),y=a(34),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),w=function(e){var t=e.account,a=e.startingBalance;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"account"}),": ",c.a.createElement(p.default,{account:t}),"; ",c.a.createElement(i.b,{id:"balance"}),": ",c.a.createElement(E.default,{amount:a}))},T=function(e){var t=e.authRequiredFlag,a=void 0===t?null:t,n=e.authRevocableFlag,r=void 0===n?null:n;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"flags"}),": ",null!=a&&c.a.createElement("span",null,"auth_required_flag=",String(a),"; "),null!=r&&c.a.createElement("span",null,"auth_revocable_flag=",String(r)))},R=function(e){var t=e.homeDomain;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"home.domain"}),": ",c.a.createElement("a",{href:"https://"+t,target:"_blank"},t))},O=function(e){var t=e.account;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"account"}),": ",t)},A=function(e){var t=e.amount,a=e.assetType,n=e.assetCode,r=e.assetIssuer,l=e.showLabel,u=void 0===l||l;return c.a.createElement("span",null,!0===u&&c.a.createElement("span",null,c.a.createElement(i.b,{id:"amount"}),": "),c.a.createElement(E.default,{amount:t})," ",c.a.createElement(h.default,{code:n,type:a,issuer:r}))},j=function(e){var t=e.assetType,a=e.assetCode,n=e.assetIssuer;return c.a.createElement(h.default,{code:a,type:t,issuer:n})},k=function(e){var t=e.op,a=e.type;return t?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(i.b,{id:"key"}),": ",c.a.createElement("span",{title:t.name},f()(t.name))),"data_removed"!==a&&c.a.createElement("div",null,c.a.createElement(i.b,{id:"value"}),": ",c.a.createElement("span",{title:t.value},f()(Object(y.a)(t.value))))):null},q=function(e){var t=e.newSeq;return c.a.createElement("span",null,t)},C=function(e){var t=e.publicKey,a=e.weight;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"key.public"}),": ",c.a.createElement(p.default,{account:t}),"; "," ",c.a.createElement(i.b,{id:"weight"}),": ",a)},F=function(e){var t=e.boughtAmount,a=e.boughtAssetType,n=e.boughtAssetCode,r=e.boughtAssetIssuer,l=e.seller,u=e.soldAmount,s=e.soldAssetType,o=e.soldAssetCode,d=e.soldAssetIssuer;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"bought"}),": ",c.a.createElement(A,{amount:t,assetCode:n,assetType:a,assetIssuer:r,showLabel:!1}),"; ",c.a.createElement(i.b,{id:"sold"}),": ",c.a.createElement(A,{amount:u,assetCode:o,assetType:s,assetIssuer:d,showLabel:!1}),"; ",c.a.createElement(i.b,{id:"seller"}),": ",c.a.createElement(p.default,{account:l}))},I=function(e){var t=e.assetType,a=e.assetCode,n=e.assetIssuer,r=e.limit,l=e.trustor;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"asset"}),": ",c.a.createElement(h.default,{code:a,type:t,issuer:n||l}),r&&c.a.createElement("span",null,"; ",c.a.createElement(i.b,{id:"limit"}),": ",r))},S=function(e){var t=e.lowThreshold,a=e.medThreshold,n=e.highThreshold;return c.a.createElement("span",null,c.a.createElement(i.b,{id:"threshold.low"}),": "+t+" / ",c.a.createElement(i.b,{id:"threshold.medium"}),": "+a+" / ",c.a.createElement(i.b,{id:"threshold.high"}),": "+n)},x={account_created:w,account_removed:O,account_credited:A,account_debited:A,account_thresholds_updated:S,account_home_domain_updated:R,account_flags_updated:T,sequence_bumped:q,signer_created:C,signer_removed:C,signer_updated:C,trustline_created:I,trustline_removed:j,trustline_updated:I,trustline_authorized:I,trustline_deauthorized:I,offer_created:m.default,offer_removed:m.default,offer_updated:m.default,trade:F,data_created:k,data_removed:k,data_updated:k},L=function(e){var t=e.effect,a=e.op,n=x[t.type];return n?c.a.createElement(n,Object.assign({},t,{op:a})):c.a.createElement("span",null,t.type)},P=function(e){function t(){var e,a,l,u;n(this,t);for(var c=arguments.length,s=Array(c),o=0;o<c;o++)s[o]=arguments[o];return a=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.state={op:null,txHash:null},u=a,r(l,u)}return l(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this;this.props.effect.operation().then(function(t){return e.setState({op:t,txHash:t.transaction_hash})})}},{key:"filterEffectsFn",value:function(){var e=this.props.effect.id;return function(t){var a=t.filter(function(t){return t.id===e});return a.length>0?JSON.stringify(a[0],null,2):null}}},{key:"render",value:function(){var e=this.props,t=e.effect,a=e.effectURLFn,n=e.showAccount,r=void 0===n||n,l=null!=this.state.op?this.state.op.id:null;return c.a.createElement("tr",{key:t.id,id:t.id,className:"effect"},r&&c.a.createElement("td",{className:"account-badge"},c.a.createElement(p.default,{account:t.account})),c.a.createElement("td",null,t.type),c.a.createElement("td",null,c.a.createElement(L,{effect:t,op:this.state.op})),c.a.createElement("td",null,null!=this.state.txHash&&c.a.createElement(_.default,{hash:this.state.txHash,compact:!0})),c.a.createElement("td",null,c.a.createElement(v.default,{initialNow:this.props.parentRenderTimestamp,value:t.createdAt})),c.a.createElement("td",null,c.a.createElement(b.default,{url:a(l)+"?limit=200&order=desc",filterFn:this.filterEffectsFn()})))}}]),t}(c.a.Component);P.propTypes={effect:o.a.shape({id:o.a.string.isRequired,links:o.a.object.isRequired,account:o.a.string.isRequired,type:o.a.string.isRequired,created_at:o.a.string}).isRequired,effectURLFn:o.a.func.isRequired,parentRenderTimestamp:o.a.number},t.default=P}});
//# sourceMappingURL=22.46dd9b7a.chunk.js.map