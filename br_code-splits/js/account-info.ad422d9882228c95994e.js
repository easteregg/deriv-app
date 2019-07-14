(window.webpackJsonp=window.webpackJsonp||[]).push([["account-info"],{588:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r.n(a),c=r(1),o=r.n(c),i=r(0),s=r.n(i),l=r(40),u=r(3),p=r(30),_=r(8),d=r(7),g=r(9),f=r(10);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,r,a,n,c,o){try{var i=e[c](o),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(a,n)}function w(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=v(this,(e=b(t)).call.apply(e,[this].concat(n)))).setWrapperRef=function(e){r.wrapper_ref=e},r.handleClickOutside=function(e){var t=!e.target.classList.contains("acc-info");r.wrapper_ref&&!r.wrapper_ref.contains(e.target)&&r.props.is_visible&&t&&r.props.toggle()},r.handleLogout=function(){r.props.toggle(),r.props.is_positions_drawer_on&&r.props.togglePositionsDrawer(),r.props.toggleServicesError(!1),r.props.clearContract(),Object(g.c)().then(r.props.cleanUp)},r}var r,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,s.a.Component),r=t,(a=[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"doSwitch",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.toggle(),this.props.account_loginid!==t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.props.switchAccount(t);case 5:this.props.has_error&&this.props.clearError();case 6:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(a,n){var c=e.apply(t,r);function o(e){m(c,a,n,o,i,"next",e)}function i(e){m(c,a,n,o,i,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!this.props.is_logged_in)return!1;var t=this.props.account_list.filter(function(e){return!e.is_virtual}),r=this.props.account_list.find(function(e){return e.is_virtual}),a=t.length>1?Object(u.localize)("Real accounts"):Object(u.localize)("Real account"),c=function(e){var t=e.text;return s.a.createElement("div",{className:"acc-switcher__new-account"},s.a.createElement("a",{className:"acc-switcher__new-account-link",href:Object(p.urlFor)("user/accounts",void 0,void 0,!0),rel:"noopener noreferrer",target:"_blank"},t))};return s.a.createElement("div",{className:"acc-switcher__list",ref:this.setWrapperRef},!(!this.props.account_list.length||!t.length)&&s.a.createElement("div",{className:"acc-switcher__list-group"},s.a.createElement("span",{className:"acc-switcher__list-title"},a),s.a.createElement("div",{className:"acc-switcher__accounts"},t.map(function(t){return s.a.createElement("div",{key:t.loginid,className:n()("acc-switcher__account",{"acc-switcher__account--selected":t.loginid===e.props.account_loginid}),onClick:e.doSwitch.bind(e,t.loginid)},s.a.createElement("span",{className:"acc-switcher__id"},s.a.createElement(d.a,{icon:"IconAccountsCurrency",className:"acc-switcher__id-icon acc-switcher__id-icon--".concat(t.icon),type:t.icon}),t.loginid))})),!(!this.props.is_upgrade_enabled||!this.props.upgrade_info.can_open_multi)&&s.a.createElement(c,{text:Object(u.localize)("Add new account")})),!Object(_.isEmptyObject)(r)&&s.a.createElement("div",{className:"acc-switcher__list--virtual"},s.a.createElement("span",{className:"acc-switcher__list-title"},Object(u.localize)("Virtual account")),s.a.createElement("div",{className:"acc-switcher__accounts"},s.a.createElement("div",{className:n()("acc-switcher__account",{"acc-switcher__account--selected":this.props.virtual_loginid===this.props.account_loginid}),onClick:this.doSwitch.bind(this,this.props.virtual_loginid)},s.a.createElement("span",{className:n()("acc-switcher__id","acc-switcher__id--virtual")},this.props.virtual_loginid)))),!(!this.props.is_upgrade_enabled||!this.props.is_virtual)&&s.a.createElement(c,{text:Object(u.localize)("Upgrade to Real Account")}),s.a.createElement("div",{className:"acc-switcher__logout",onClick:this.handleLogout},s.a.createElement("span",{className:"acc-switcher__logout-text"},Object(u.localize)("Log out")),s.a.createElement(d.a,{icon:"IconLogout",className:"acc-switcher__logout-icon drawer__icon"})))}}])&&w(r.prototype,a),c&&w(r,c),t}();E.propTypes={account_list:o.a.array,account_loginid:o.a.string,cleanUp:o.a.func,clearContract:o.a.func,clearError:o.a.func,has_error:o.a.bool,is_logged_in:o.a.bool,is_positions_drawer_on:o.a.bool,is_upgrade_enabled:o.a.bool,is_virtual:o.a.bool,is_visible:o.a.bool,onClickUpgrade:o.a.func,toggle:o.a.func,togglePositionsDrawer:o.a.func,toggleServicesError:o.a.func,upgrade_info:o.a.object,virtual_loginid:o.a.string};var O=Object(f.b)(function(e){var t=e.client,r=e.ui,a=e.modules;return{account_list:t.account_list,account_loginid:t.loginid,is_logged_in:t.is_logged_in,is_virtual:t.is_virtual,switchAccount:t.switchAccount,upgrade_info:t.upgrade_info,cleanUp:t.cleanUp,virtual_loginid:t.virtual_account_loginid,clearContract:a.trade.clearContract,clearError:a.contract_trade.clearError,has_error:a.contract_trade.has_error,is_positions_drawer_on:r.is_positions_drawer_on,togglePositionsDrawer:r.togglePositionsDrawer,toggleServicesError:r.toggleServicesErrorModal}})(E);var N=function(e){var t,r,a,c=e.balance,o=e.currency,i=e.loginid,u=e.is_dialog_on,p=e.is_upgrade_enabled,_=e.is_virtual,g=e.onClickUpgrade,f=e.toggleDialog;return s.a.createElement("div",{className:"acc-info__wrapper"},s.a.createElement("div",{className:n()("acc-info",{"acc-info--show":u,"acc-info--is-virtual":_}),onClick:f},s.a.createElement("p",{className:"acc-info__id",title:i},i," "),void 0!==c&&s.a.createElement("p",{className:"acc-info__balance"},s.a.createElement("span",{className:n()("symbols",(t={},r="symbols--".concat((o||"").toLowerCase()),a=o,r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t))}),c),s.a.createElement(d.a,{icon:"IconArrowBold",className:"acc-info__select-arrow"})),s.a.createElement(l.CSSTransition,{in:u,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},unmountOnExit:!0},s.a.createElement("div",{className:"acc-switcher__wrapper"},s.a.createElement(O,{is_visible:u,toggle:f,is_upgrade_enabled:p,onClickUpgrade:g}))))};N.propTypes={account_type:o.a.string,balance:o.a.string,currency:o.a.string,is_dialog_on:o.a.bool,is_upgrade_enabled:o.a.bool,is_virtual:o.a.bool,loginid:o.a.string,onClickUpgrade:o.a.func,toggleDialog:o.a.func};t.default=N}}]);
//# sourceMappingURL=account-info.ad422d9882228c95994e.js.map