(window.webpackJsonp=window.webpackJsonp||[]).push([["positions-drawer"],{570:function(e,t){var r,a={extractInfoFromShortcode:r=function(e){var t={category:"",underlying:"",barrier_1:""},r=new RegExp("^([A-Z]+)_((OTC_[A-Z0-9]+)|R_[\\d]{2,3}|[A-Z]+)").exec(e);return null!==r&&(t.category=r[1].toLowerCase(),t.underlying=r[2],/^(CALL|PUT)$/i.test(t.category)&&(t.barrier_1=e.split("_").slice(-2)[0])),t},isHighLow:function(e){var t=e.shortcode,a=void 0===t?"":t,n=e.shortcode_info,o=void 0===n?"":n,i=a?r(a):o;return!(!i||!i.barrier_1||/^S0P$/.test(i.barrier_1))}};e.exports=a},572:function(e,t,r){"use strict";var a=r(4),n=r.n(a),o=r(1),i=r.n(o),c=r(0),s=r.n(c),l=r(10),p=r(14);function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(e){var t=e.current_tick,r=e.ticks_count,a=u(Array(r).keys());return s.a.createElement("div",{className:"progress-slider__ticks"},s.a.createElement("span",{className:"progress-slider__ticks-caption"},s.a.createElement(p.a,{i18n_default_text:"Tick {{current_tick}}",values:{current_tick:t.toString()}})),s.a.createElement("div",{className:"progress-slider__ticks-wrapper"},a.map(function(e){return s.a.createElement("div",{key:e,className:n()("progress-slider__ticks-step",{"progress-slider__ticks-step--marked":e+1<=parseInt(t)})})})))};d.propTypes={current_tick:i.a.number,ticks_count:i.a.number};var m=d,_=r(573),f=r(5),y=function(e){var t=e.end_time,r=void 0===t?null:t,a=e.start_time;if(!+r||a.unix()>+r)return"";var n=Object(f.i)(Object(f.j)(a.unix(),r));return s.a.createElement("div",{className:"remaining-time"},n)};y.propTypes={end_time:i.a.oneOfType([i.a.number,i.a.string]),start_time:i.a.object};var b=Object(l.b)(function(e){return{start_time:e.common.server_time}})(y),v=function(e){var t=e.className,r=e.current_tick,a=e.is_loading,o=e.start_time,i=e.expiry_time,c=e.server_time,l=e.ticks_count,p=Object(_.d)(c,o,i);return s.a.createElement("div",{className:n()("progress-slider",t)},l?s.a.createElement(m,{current_tick:r,ticks_count:l}):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"positions-drawer-card__remaining-time"},s.a.createElement(b,{end_time:i})),a||p<1?s.a.createElement("div",{className:"progress-slider__infinite-loader"},s.a.createElement("div",{className:"progress-slider__infinite-loader--indeterminate"})):s.a.createElement("div",{className:"progress-slider__track"},s.a.createElement("div",{className:n()("progress-slider__line",{"progress-slider__line--green":p>=50,"progress-slider__line--orange":p<50&&p>=20,"progress-slider__line--red":p<20}),style:{width:"".concat(p,"%")}}))))};v.propTypes={className:i.a.string,current_tick:i.a.number,expiry_time:i.a.oneOfType([i.a.number,i.a.string]),is_loading:i.a.bool,server_time:i.a.object,start_time:i.a.oneOfType([i.a.number,i.a.string]),ticks_count:i.a.number};t.a=Object(l.b)(function(e){return{server_time:e.common.server_time}})(v)},573:function(e,t,r){"use strict";var a=r(19),n=r.n(a),o=r(3),i=function(e,t){if(!e||isNaN(e))return e;var r=String(t?(+e).toFixed(t):e),a=r.indexOf(".");return r.replace(/\d(?=(?:\d{3})+(?:\.|$))/g,function(e,t){return a<=0||t<a?"".concat(e,","):e})},c=function(e,t,r){var a=n.a.duration(n.a.unix(r).diff(n.a.unix(t))),o=n.a.duration(n.a.unix(r).diff(e)).asMilliseconds()/a.asMilliseconds()*100;return o<.5?o=0:o>100&&(o=100),Math.round(o)},s=function(e){return p(e.contract_type)?Object(o.localize)("Target"):Object(o.localize)("Barrier")},l=function(e){return p(e.contract_type)?u(e)[e.contract_type]:i(e.barrier)},p=function(e){return/digit/.test(e.toLowerCase())},u=function(e){return{DIGITDIFF:Object(o.localize)("Not {{barrier}}",{barrier:e.barrier}),DIGITEVEN:Object(o.localize)("Even"),DIGITMATCH:Object(o.localize)("Equals {{barrier}}",{barrier:e.barrier}),DIGITODD:Object(o.localize)("Odd"),DIGITOVER:Object(o.localize)("Over {{barrier}}",{barrier:e.barrier}),DIGITUNDER:Object(o.localize)("Under {{barrier}}",{barrier:e.barrier})}};r.d(t,"a",function(){return i}),r.d(t,"d",function(){return c}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return l}),r.d(t,"e",function(){return p})},574:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(4),n=r.n(a),o=r(0),i=r.n(o),c=function(e){var t=e.market;return i.a.createElement("div",{className:n()("icons-underlying","icons-underlying__ic-".concat(t?t.toUpperCase():"unknown"))})}},577:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1),i=r.n(o),c=r(80),s=r(7),l=function(e){var t=e.type,r=e.is_high_low;return n.a.createElement("div",{className:"contract-type"},n.a.createElement("div",{className:"contract-type__type-wrapper"},n.a.createElement(s.a,{icon:"IconTradeType",type:r?"".concat(t.toLowerCase(),"_barrier"):t.toLowerCase(),className:"category-type"})),n.a.createElement("span",{className:"contract-type__type-label"},Object(c.b)(t,r)||""))};l.propTypes={type:i.a.string},t.a=l},578:function(e,t,r){"use strict";var a=r(572);r.d(t,"a",function(){return a.a})},584:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i=function(){return Math.random().toString(36).substring(2)},c=function(e){var t=e.rtl,r=e.speed,n=e.interval,c=e.style,s=e.width,l=e.height,p=e.baseUrl,u=e.gradientRatio,d=e.animate,m=e.ariaLabel,_=e.children,f=e.className,y=e.uniquekey,b=e.primaryColor,v=e.primaryOpacity,g=e.secondaryColor,h=e.secondaryOpacity,w=e.preserveAspectRatio,E=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r}(e,["rtl","speed","interval","style","width","height","baseUrl","gradientRatio","animate","ariaLabel","children","className","uniquekey","primaryColor","primaryOpacity","secondaryColor","secondaryOpacity","preserveAspectRatio"]),O=y?y+"-idClip":i(),k=y?y+"-idGradient":i(),j=t?{transform:"scaleX(-1)"}:{},N="0; "+n+"; 1",x=r+"s";return Object(a.createElement)("svg",o({role:"img",style:o({},c,j),className:f,"aria-labelledby":m||null,viewBox:"0 0 "+s+" "+l,preserveAspectRatio:w},E),m?Object(a.createElement)("title",null,m):null,Object(a.createElement)("rect",{x:"0",y:"0",width:s,height:l,clipPath:"url("+p+"#"+O+")",style:{fill:"url("+p+"#"+k+")"}}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:O},_),Object(a.createElement)("linearGradient",{id:k},Object(a.createElement)("stop",{offset:"0%",stopColor:b,stopOpacity:v},d&&Object(a.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:N,dur:x,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:g,stopOpacity:h},d&&Object(a.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:N,dur:x,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:b,stopOpacity:v},d&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:N,dur:x,repeatCount:"indefinite"})))))},s={animate:!0,ariaLabel:"Loading interface...",baseUrl:"",gradientRatio:2,height:130,interval:.25,preserveAspectRatio:"none",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,style:{},width:400},l=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},p=function(e){var t=o({},s,e),r=e.children?e.children:Object(a.createElement)(l,o({},t));return Object(a.createElement)(c,o({},t),r)},u=p,d=r(1),m=r.n(d),_=function(e){var t=e.is_dark_theme,r=e.speed;return n.a.createElement(u,{height:173,width:218,speed:r,primaryColor:t?"rgba(127, 131, 151, 0.16)":"#f4f4f6",secondaryColor:t?"#303342":"#eaeaec"},n.a.createElement("rect",{x:"43",y:"19",rx:"0",ry:"0",width:"56",height:"8"}),n.a.createElement("rect",{x:"147",y:"19",rx:"0",ry:"0",width:"56",height:"8"}),n.a.createElement("rect",{x:"12",y:"50",rx:"0",ry:"0",width:"44",height:"8"}),n.a.createElement("rect",{x:"13",y:"68",rx:"0",ry:"0",width:"192",height:"8"}),n.a.createElement("rect",{x:"5",y:"89",rx:"0",ry:"0",width:"208",height:"1"}),n.a.createElement("rect",{x:"12",y:"104",rx:"0",ry:"0",width:"44",height:"8"}),n.a.createElement("rect",{x:"12",y:"9",rx:"0",ry:"0",width:"24",height:"24"}),n.a.createElement("rect",{x:"116",y:"11",rx:"0",ry:"0",width:"24",height:"24"}),n.a.createElement("rect",{x:"12",y:"118",rx:"0",ry:"0",width:"88",height:"8"}),n.a.createElement("rect",{x:"116",y:"104",rx:"0",ry:"0",width:"44",height:"8"}),n.a.createElement("rect",{x:"116",y:"118",rx:"0",ry:"0",width:"88",height:"8"}),n.a.createElement("rect",{x:"12",y:"139",rx:"0",ry:"0",width:"44",height:"8"}),n.a.createElement("rect",{x:"12",y:"153",rx:"0",ry:"0",width:"88",height:"8"}),n.a.createElement("rect",{x:"116",y:"139",rx:"0",ry:"0",width:"44",height:"8"}),n.a.createElement("rect",{x:"116",y:"153",rx:"0",ry:"0",width:"88",height:"8"}))};_.propTypes={is_dark_theme:m.a.bool,speed:m.a.number},r.d(t,"a",function(){return _})},595:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r.n(a),o=r(12),i=r(1),c=r.n(i),s=r(0),l=r.n(s),p=r(49),u=r(42),d=r(100),m=r(3),_=r(7),f=r(33),y=function(e){var t=e.error;return l.a.createElement("div",{className:"portfolio-empty"},l.a.createElement("div",{className:"portfolio-empty__wrapper"},t?l.a.createElement("span",{className:"portfolio-empty__text"},t):l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{icon:"IconPositions",className:"portfolio-empty__icon"}),l.a.createElement("span",{className:"portfolio-empty__text"},Object(m.localize)("No open positions")))))},b=r(10),v=function(e){var t=e.contract_id,r=e.children,a=e.className,n=e.openContract;return l.a.createElement("a",{className:a,href:"javascript:;",onClick:function(){return n(t,!0)}},r)};v.propTypes={children:c.a.node,className:c.a.string,contract_id:c.a.number,onMount:c.a.func};var g=Object(b.b)(function(e){return{openContract:e.modules.contract_trade.onMount}})(v),h=r(570),w=r.n(h),E=r(13),O=r(28),k=r(95),j=r(574),N=r(584),x=r(577),C=r(578),T=r(114);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var I=function(e){e.styles;var t=P(e,["styles"]);return l.a.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},t),l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#4BBFAB"}),l.a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M6.5 10.8l5.65-5.65a.5.5 0 0 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-3-3a.5.5 0 1 1 .7-.7l2.65 2.64z"})))};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var z=function(e){e.styles;var t=M(e,["styles"]);return l.a.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},t),l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#E31C4B",fillRule:"nonzero"}),l.a.createElement("path",{stroke:"#FFF",strokeLinecap:"round",d:"M10.5 5.5l-5 5m5 0l-5-5"})))};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=F(this,(e=U(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){r.props.is_unsupported&&(e.preventDefault(),r.props.onClick())},r}var r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,l.a.PureComponent),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.contract_id,r=e.onClickRemove,a=e.result,o="won"===a;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.CSSTransition,{in:!!a,timeout:250,classNames:{enter:"positions-drawer-card__result--enter",enterDone:"positions-drawer-card__result--enter-done",exit:"positions-drawer-card__result--exit"},unmountOnExit:!0},l.a.createElement("div",{className:n()("positions-drawer-card__result",{"positions-drawer-card__result--won":o,"positions-drawer-card__result--lost":!o})},l.a.createElement("span",{className:"result__close-btn",onClick:function(){return r(t)}}),l.a.createElement(p.c,{className:"result__caption-wrapper",to:Object(T.b)(t),onClick:this.handleClick},l.a.createElement("span",{className:n()("result__caption",{"result__caption--won":o,"result__caption--lost":!o})},o?l.a.createElement(l.a.Fragment,null,Object(m.localize)("won"),l.a.createElement(I,{className:"result__icon"})):l.a.createElement(l.a.Fragment,null,Object(m.localize)("lost"),l.a.createElement(z,{className:"result__icon"})))))))}}])&&A(r.prototype,a),o&&A(r,o),t}();G.propTypes={contract_id:c.a.oneOfType([c.a.number,c.a.string]),has_same_contract_mounted:c.a.bool,is_unsupported:c.a.bool,onClick:c.a.func,onClickRemove:c.a.func,result:c.a.string};var B=G,q=function(e){var t=e.active_position,r=e.className,a=e.contract_info,o=e.currency,i=e.current_tick,c=e.indicative,s=e.id,p=e.is_dark_theme,d=e.is_loading,f=e.is_sell_requested,y=e.is_unsupported,b=e.is_valid_to_sell,v=e.profit_loss,h=e.onClickSell,T=e.onClickRemove,S=e.result,P=e.sell_price,I=e.status,R=e.toggleUnsupportedContractModal,M=e.type,z=l.a.createElement("div",{className:"positions-drawer-card__content-loader"},l.a.createElement(N.a,{is_dark_theme:p,speed:2})),D=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:n()("positions-drawer-card__grid","positions-drawer-card__grid-underlying-trade")},l.a.createElement("div",{className:"positions-drawer-card__underlying-name"},l.a.createElement(j.a,{market:a.underlying}),l.a.createElement("span",{className:"positions-drawer-card__symbol"},a.display_name)),l.a.createElement("div",{className:"positions-drawer-card__type"},l.a.createElement(x.a,{type:M,is_high_low:w.a.isHighLow({shortcode:a.shortcode})}))),S?l.a.createElement("div",{className:"progress-slider--completed"}):l.a.createElement(C.a,{is_loading:d,start_time:a.date_start,expiry_time:a.date_expiry,current_tick:i,ticks_count:a.tick_count}),l.a.createElement("div",{className:n()("positions-drawer-card__grid","positions-drawer-card__grid-profit-payout")},l.a.createElement("div",{className:n()("positions-drawer-card__profit-loss","positions-drawer-card__profit-loss-label")},S?Object(m.localize)("Profit/Loss:"):Object(m.localize)("Potential profit/loss:")),l.a.createElement("div",{className:n()("positions-drawer-card__indicative","positions-drawer-card__indicative-label")},S?Object(m.localize)("Payout:"):Object(m.localize)("Indicative price:")),l.a.createElement("div",{className:n()("positions-drawer-card__profit-loss",{"positions-drawer-card__profit-loss--is-crypto":Object(E.isCryptocurrency)(o),"positions-drawer-card__profit-loss--negative":v<0,"positions-drawer-card__profit-loss--positive":v>0})},l.a.createElement(k.a,{amount:Math.abs(v),currency:o}),l.a.createElement("div",{className:n()("positions-drawer-card__indicative--movement",{"positions-drawer-card__indicative--movement-complete":!!S})},l.a.createElement(_.a,{icon:"IconPriceMove",type:"complete"!==I?I:null}))),l.a.createElement("div",{className:"positions-drawer-card__indicative"},l.a.createElement(k.a,{amount:P||c,currency:o}),l.a.createElement("div",{className:n()("positions-drawer-card__indicative--movement",{"positions-drawer-card__indicative--movement-complete":!!S})},l.a.createElement(_.a,{icon:"IconPriceMove",type:"complete"!==I?I:null})))),l.a.createElement("div",{className:n()("positions-drawer-card__grid","positions-drawer-card__grid-price-payout")},l.a.createElement("div",{className:"positions-drawer-card__purchase-price"},l.a.createElement("span",{className:"positions-drawer-card__purchase-label"},Object(m.localize)("Purchase price:")),l.a.createElement("span",{className:"positions-drawer-card__purchase-value"},l.a.createElement(k.a,{amount:a.buy_price,currency:o}))),l.a.createElement("div",{className:"positions-drawer-card__payout-price"},l.a.createElement("span",{className:"positions-drawer-card__payout-label"},Object(m.localize)("Potential payout:")),l.a.createElement("span",{className:"positions-drawer-card__payout-value"},a.payout?l.a.createElement(k.a,{amount:a.payout,currency:o}):l.a.createElement("strong",null,"-")))));return l.a.createElement("div",{className:n()("positions-drawer-card__wrapper",{"positions-drawer-card__wrapper--active":parseInt(t)===s},r)},l.a.createElement(B,{contract_id:s,is_unsupported:y,has_same_contract_mounted:s===parseInt(t),onClickRemove:T,onClick:function(){return R(!0)},result:S}),y?l.a.createElement("div",{className:n()("positions-drawer-card",{"positions-drawer-card--active":parseInt(t)===s,"positions-drawer-card--green":v>0&&!S,"positions-drawer-card--red":v<0&&!S}),onClick:function(){return R(!0)}},a.underlying?D:z):l.a.createElement(g,{className:n()("positions-drawer-card",{"positions-drawer-card--active":parseInt(t)===s,"positions-drawer-card--green":v>0&&!S,"positions-drawer-card--red":v<0&&!S}),contract_id:s},a.underlying?D:z),l.a.createElement(u.CSSTransition,{in:!!b,timeout:250,classNames:{enter:"positions-drawer-card__sell-button--enter",enterDone:"positions-drawer-card__sell-button--enter-done",exit:"positions-drawer-card__sell-button--exit"},unmountOnExit:!0},l.a.createElement("div",{className:"positions-drawer-card__sell-button"},l.a.createElement(O.a,{className:n()("btn--primary","btn--primary--green","btn--sell",{"btn--loading":f}),is_disabled:!b||f,text:Object(m.localize)("Sell contract"),onClick:function(){return h(s)}}))))};q.propTypes={active_position:c.a.oneOfType([c.a.number,c.a.string]),className:c.a.string,contract_info:c.a.object,currency:c.a.string,current_tick:c.a.number,duration:c.a.number,duration_unit:c.a.string,exit_spot:c.a.oneOfType([c.a.number,c.a.string]),id:c.a.number,indicative:c.a.number,is_dark_theme:c.a.bool,is_loading:c.a.bool,is_sell_requested:c.a.bool,is_unsupported:c.a.bool,is_valid_to_sell:c.a.oneOfType([c.a.number,c.a.bool]),onClickRemove:c.a.func,onClickSell:c.a.func,profit_loss:c.a.number,result:c.a.string,sell_time:c.a.number,status:c.a.string,toggleUnsupportedContractModal:c.a.func,type:c.a.string};var H=q;function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function J(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function V(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,W(t).apply(this,arguments))}var r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,l.a.Component),r=t,(a=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this.props,t=e.all_positions,r=e.active_contract_id,a=e.error,o=e.currency,i=e.is_contract_mode,c=e.is_dark_theme,s=e.is_empty,b=e.is_positions_drawer_on,v=e.onClickSell,g=e.onClickRemove,h=e.openContract,w=e.toggleDrawer,E=e.toggleUnsupportedContractModal,O=l.a.createElement(l.a.Fragment,null,l.a.createElement(u.TransitionGroup,{component:"div"},t.slice(0,5).map(function(e){return l.a.createElement(u.CSSTransition,{appear:!0,key:e.id,in:!0,timeout:150,classNames:{appear:"positions-drawer-card__wrapper--enter",enter:"positions-drawer-card__wrapper--enter",enterDone:"positions-drawer-card__wrapper--enter-done",exit:"positions-drawer-card__wrapper--exit"},unmountOnExit:!0},l.a.createElement(H,$({active_position:r,is_dark_theme:c,onClickSell:v,onClickRemove:g,openContract:h,key:e.id,currency:o,toggleUnsupportedContractModal:E},e)))})));return l.a.createElement("div",{className:n()("positions-drawer",{"positions-drawer--open":b,"positions-drawer--contract-mode":i})},l.a.createElement("div",{className:"positions-drawer__header"},l.a.createElement("span",{className:"positions-drawer__title"},Object(m.localize)("Recent Positions")),l.a.createElement("div",{className:"positions-drawer__icon-close",onClick:w},l.a.createElement(_.a,{icon:"IconMinimize"}))),l.a.createElement("div",{className:"positions-drawer__body"},l.a.createElement(d.Scrollbars,{style:{width:"100%",height:"100%"},autoHide:!0},s||a?l.a.createElement(y,{error:a}):O)),l.a.createElement("div",{className:"positions-drawer__footer"},l.a.createElement(p.c,{className:"btn btn--link btn--alternate",to:f.a.reports},l.a.createElement("span",{className:"btn__text"},Object(m.localize)("Go to Reports")))))}}])&&J(r.prototype,a),o&&J(r,o),t}();K.propTypes={active_contract_id:c.a.number,all_positions:o.PropTypes.arrayOrObservableArray,children:c.a.any,currency:c.a.string,error:c.a.string,is_contract_mode:c.a.bool,is_dark_theme:c.a.bool,is_empty:c.a.bool,is_loading:c.a.bool,is_positions_drawer_on:c.a.bool,onClickRemove:c.a.func,onClickSell:c.a.func,onMount:c.a.func,onUnmount:c.a.func,openContract:c.a.func,toggleDrawer:c.a.func};var Q=Object(b.b)(function(e){var t=e.modules,r=e.client,a=e.ui;return{currency:r.currency,active_contract_id:t.contract_trade.contract_id,all_positions:t.portfolio.all_positions,error:t.portfolio.error,is_contract_mode:t.smart_chart.is_contract_mode,is_empty:t.portfolio.is_empty,is_loading:t.portfolio.is_loading,onClickSell:t.portfolio.onClickSell,onClickRemove:t.portfolio.removePositionById,openContract:t.contract_trade.onMount,onMount:t.portfolio.onMount,onUnmount:t.portfolio.onUnmount,is_dark_theme:a.is_dark_mode_on,is_positions_drawer_on:a.is_positions_drawer_on,toggleDrawer:a.togglePositionsDrawer,toggleUnsupportedContractModal:a.toggleUnsupportedContractModal}})(K);r.d(t,"default",function(){return Q})}}]);
//# sourceMappingURL=positions-drawer.b40fc4360ebc072032ef.js.map