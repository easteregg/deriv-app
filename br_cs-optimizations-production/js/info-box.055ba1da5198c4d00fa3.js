(window.webpackJsonp=window.webpackJsonp||[]).push([["info-box"],{581:function(e,a,n){"use strict";var t=n(1),o=n.n(t),i=n(0),r=n.n(i),c=n(143),s=c.b.div({enter:{y:0,opacity:1,transition:{y:{type:"spring",stiffness:500,damping:15},default:{duration:300}}},exit:{y:35,opacity:0,transition:{duration:0}}}),l=function(e){var a=e.children,n=e.className,t=e.is_visible,o=e.keyname;return r.a.createElement(c.a,null,t&&r.a.createElement(s,{className:n,key:o},a))};l.propTypes={children:o.a.node,is_visible:o.a.bool,keyname:o.a.string};var m=c.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:-50,opacity:0,transition:{duration:250}}}),d=c.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:50,opacity:0,transition:{duration:250}}}),u=c.b.div({enter:{opacity:1,transition:{duration:300}},exit:{opacity:0,transition:{duration:300}}}),p=function(e){var a=e.children,n=e.className,t=e.is_visible,o=e.keyname,i=e.type;return"top"===i?r.a.createElement(c.a,null,t&&r.a.createElement(m,{className:n,key:o},a)):"bottom"===i?r.a.createElement(c.a,null,t&&r.a.createElement(d,{className:n,key:o},a)):r.a.createElement(c.a,null,t&&r.a.createElement(u,{className:n,key:o},a))};p.propTypes={children:o.a.node,is_visible:o.a.bool,keyname:o.a.string,type:o.a.string};var y=c.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:-20,opacity:0,transition:{duration:100}}}),v=c.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:20,opacity:0,transition:{duration:100}}}),f=function(e){var a=e.children,n=e.className,t=e.keyname,o=e.is_visible;return"bottom"===e.type?r.a.createElement(c.a,{flipMove:!1},o&&r.a.createElement(v,{className:n,key:t},a)):r.a.createElement(c.a,{flipMove:!1},o&&r.a.createElement(y,{className:n,key:t},a))};f.propTypes={children:o.a.node,is_visible:o.a.bool,keyname:o.a.string,type:o.a.string},n.d(a,"a",function(){return l}),n.d(a,"b",function(){return p}),n.d(a,"c",function(){return f})},606:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),i=n(0),r=n.n(i),c=n(581),s=n(7),l=function(e){var a=e.is_contract_mode,n=e.onClose;return a?r.a.createElement("div",{className:"chart-close-btn",onClick:n},r.a.createElement(s.a,{icon:"ContractIconClose",className:"ic-chart-close"})):null};l.propTypes={is_contract_mode:o.a.bool,onClose:o.a.func};var m=l,d=n(12),u=function(e){var a=e.contract_info;return r.a.createElement("div",{className:"info-box-longcode"},r.a.createElement(s.a,{icon:"IconFlag",className:"info-box-longcode-icon"}),r.a.createElement("span",{className:"info-box-longcode-text"},a.longcode))};u.propTypes={longcode:o.a.string};var p=Object(d.observer)(u),y=function(e){var a=e.message,n=void 0===a?"":a,t=e.onClickClose;return n?r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message-icon"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#F44336"}),r.a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z"})))),r.a.createElement("div",{className:"message-text"},n),r.a.createElement("div",{className:"message-close",onClick:t},r.a.createElement(s.a,{icon:"IconClose"}))):null};y.propTypes={message:o.a.string,onClickClose:o.a.func};var v=y,f=function(e){var a=e.contract_info,n=e.error_message,t=e.is_contract_mode,o=e.is_trade_page,i=e.onClose,s=e.removeError,l=p,d=t&&!!a.longcode,u=o&&"function"==typeof i;return r.a.createElement(c.c,{is_visible:d,className:"info-box-container",keyname:"info-box-container"},!!a.contract_type&&r.a.createElement("div",{className:"info-box"},r.a.createElement(l,{contract_info:a})),r.a.createElement(v,{message:n,onClickClose:s}),u&&r.a.createElement(m,{is_contract_mode:t,onClose:i}))};f.propTypes={contract_info:o.a.object,error_message:o.a.string,is_contract_mode:o.a.bool,is_trade_page:o.a.bool,onClose:o.a.func,removeError:o.a.func};var b=f;n.d(a,"default",function(){return b})}}]);
//# sourceMappingURL=info-box.055ba1da5198c4d00fa3.js.map