(window.webpackJsonp=window.webpackJsonp||[]).push([["digits"],{581:function(t,e,i){"use strict";var n=i(1),a=i.n(n),r=i(0),o=i.n(r),s=i(143),c=s.b.div({enter:{y:0,opacity:1,transition:{y:{type:"spring",stiffness:500,damping:15},default:{duration:300}}},exit:{y:35,opacity:0,transition:{duration:0}}}),l=function(t){var e=t.children,i=t.className,n=t.is_visible,a=t.keyname;return o.a.createElement(s.a,null,n&&o.a.createElement(c,{className:i,key:a},e))};l.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string};var u=s.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:-50,opacity:0,transition:{duration:250}}}),p=s.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:50,opacity:0,transition:{duration:250}}}),_=s.b.div({enter:{opacity:1,transition:{duration:300}},exit:{opacity:0,transition:{duration:300}}}),d=function(t){var e=t.children,i=t.className,n=t.is_visible,a=t.keyname,r=t.type;return"top"===r?o.a.createElement(s.a,null,n&&o.a.createElement(u,{className:i,key:a},e)):"bottom"===r?o.a.createElement(s.a,null,n&&o.a.createElement(p,{className:i,key:a},e)):o.a.createElement(s.a,null,n&&o.a.createElement(_,{className:i,key:a},e))};d.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string,type:a.a.string};var f=s.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:-20,opacity:0,transition:{duration:100}}}),y=s.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:20,opacity:0,transition:{duration:100}}}),m=function(t){var e=t.children,i=t.className,n=t.keyname,a=t.is_visible;return"bottom"===t.type?o.a.createElement(s.a,{flipMove:!1},a&&o.a.createElement(y,{className:i,key:n},e)):o.a.createElement(s.a,{flipMove:!1},a&&o.a.createElement(f,{className:i,key:n},e))};m.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string,type:a.a.string},i.d(e,"a",function(){return l}),i.d(e,"b",function(){return d}),i.d(e,"c",function(){return m})},593:function(t,e,i){},604:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),r=i(0),o=i.n(r),s=i(581),c=i(12),l=i(4),u=i.n(l),p=function(t){var e=t.is_latest,i=t.is_lost,n=t.is_selected,a=t.is_trade_page,r=t.is_won,s=t.value;return o.a.createElement("span",{className:u()("digits__digit-value",{"digits__digit-value--latest":e,"digits__digit-value--selected":n,"digits__digit-value--blink":r&&e&&a,"digits__digit-value--win":r&&e,"digits__digit-value--loss":i&&e})},s)};p.propTypes={is_latest:a.a.bool,is_lost:a.a.bool,is_selected:a.a.bool,is_trade_page:a.a.bool,is_won:a.a.bool,value:a.a.number};var _=p,d=function(t){var e=t.current_spot,i=t.is_lost,n=t.is_won;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"digits__digit-spot-value"},e.slice(0,-1)),o.a.createElement("span",{className:u()("digits__digit-spot-last",{"digits__digit-spot-last--win":n,"digits__digit-spot-last--loss":i})},e.slice(-1)))};d.propTypes={current_spot:a.a.string,is_lost:a.a.bool,is_won:a.a.bool};var f=d,y=function(t){var e=t.barrier,i=t.is_lost,n=t.is_trade_page,a=t.is_won,r=t.latest_digit,c=t.value,l=r.digit,p=r.spot,d=c===l,y=c===e;return o.a.createElement("div",{className:u()("digits__digit",{"digits__digit--win":a&&d,"digits__digit--loss":i&&d})},o.a.createElement(s.a,{is_visible:!(!d||!p),className:"digits__digit-spot",keyname:"digits__digit-spot"},o.a.createElement(f,{current_spot:p,is_lost:i,is_visible:!(!d||!p),is_won:a})),o.a.createElement(_,{is_latest:d,is_lost:i,is_trade_page:n,is_selected:y,is_won:a,value:c}))};y.propTypes={barrier:a.a.number,is_lost:a.a.bool,is_trade_page:a.a.bool,is_won:a.a.bool,latest_digit:a.a.object,value:a.a.number};var m=Object(c.observer)(y),b=function(t){var e=t.is_won,i=t.position;return o.a.createElement("div",{className:u()("digits__particles",{"digits__particles--explode":e}),style:{marginLeft:i}},o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}),o.a.createElement("span",{className:"digits__particles-particle"}))};b.propTypes={is_won:a.a.bool,position:a.a.number};var g=b,v=i(7),E=function(t){var e=t.is_lost,i=t.is_won,n=t.position;return o.a.createElement("span",{className:"digits__pointer",style:{marginLeft:n}},o.a.createElement(v.a,{icon:"IconPriceMove",className:u()("digits__icon",{"digits__icon--win":i,"digits__icon--loss":e}),classNamePath:"digits__icon-color",type:"profit"}))};E.propTypes={is_lost:a.a.bool,is_won:a.a.bool,position:a.a.number};var w=E;function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=Array.from(Array(10).keys()),S=function(t){function e(){var t,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(i=k(this,(t=O(e)).call.apply(t,[this].concat(a)))).state={},i.getBarrier=function(t){var e=i.props,n=e.barrier,a=e.contract_type;return a&&{DIGITMATCH:function(t){return t===n},DIGITDIFF:function(t){return t!==n},DIGITOVER:function(t){return t>n},DIGITUNDER:function(t){return t<n},DIGITODD:function(t){return t%2},DIGITEVEN:function(t){return!(t%2)}}[a](t)?t:null},i}var i,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,o.a.Component),i=e,(n=[{key:"componentDidMount",value:function(){var t=this;this.node.querySelectorAll(".digits__digit").forEach(function(e,i){var n,a,r;t.setState((n={},a=i,r=e.offsetLeft,a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,n))})}},{key:"render",value:function(){var t=this,e=this.props,i=e.digits_info,n=e.is_ended,a=e.is_trade_page,r=e.status,s=Object.keys(i).sort().map(function(t){return i[t]}).slice(-1)[0]||{},c=n&&"won"===r,l=n&&"lost"===r,u=this.state[s.digit];return o.a.createElement("div",{ref:function(e){return t.node=e},className:"digits"},T.map(function(e){return o.a.createElement(m,{barrier:t.getBarrier(e),is_lost:l,is_trade_page:a,is_won:c,key:e,latest_digit:s,value:e})}),s.digit>=0&&o.a.createElement(w,{is_lost:l,is_won:c,position:u}),o.a.createElement(g,{is_won:c,position:u}))}}])&&N(i.prototype,n),a&&N(i,a),e}();S.propTypes={barrier:a.a.number,contract_type:a.a.string,digits_info:a.a.object,is_ended:a.a.bool,status:a.a.string};var I=Object(c.observer)(S);i(593);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var M=function(t){function e(){var t,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(i=x(this,(t=A(e)).call.apply(t,[this].concat(a)))).state={mounted:!1},i}var i,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(e,o.a.PureComponent),i=e,(n=[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"render",value:function(){var t=this.props,e=t.contract_info,i=t.digits_info,n=t.display_status,a=t.is_digit_contract,r=t.is_ended,c=t.is_trade_page;return o.a.createElement(s.c,{is_visible:a&&this.state.mounted,className:"digits",keyname:"digits",type:"bottom"},o.a.createElement(I,{barrier:+e.barrier,contract_type:e.contract_type,digits_info:i,is_ended:r,is_trade_page:c,status:n}))}}])&&D(i.prototype,n),a&&D(i,a),e}();M.propTypes={contract_info:a.a.object,digits_info:a.a.object,display_status:a.a.string,is_digit_contract:a.a.bool,is_ended:a.a.bool,is_trade_page:a.a.bool};var C=M;i.d(e,"default",function(){return C})}}]);
//# sourceMappingURL=digits.055ba1da5198c4d00fa3.js.map