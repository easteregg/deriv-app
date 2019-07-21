(window.webpackJsonp=window.webpackJsonp||[]).push([["UnsupportedContractModal"],{690:function(e,n,t){"use strict";var o=t(4),a=t.n(o),r=t(0),l=t.n(r),i=t(1),c=t.n(i),u=t(40),s=t(27),p=t(11);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=d(this,(e=m(n)).call.apply(e,[this].concat(a)))).handleCancel=function(){t.props.is_closed_on_cancel&&t.props.hideFullBlur(),t.props.onCancel()},t.handleConfirm=function(){t.props.is_closed_on_confirm&&t.props.hideFullBlur(),t.props.onConfirm()},t}var t,o,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,l.a.Component),t=n,(o=[{key:"componentDidMount",value:function(){this.props.is_visible&&this.props.showFullBlur()}},{key:"componentDidUpdate",value:function(){this.props.is_visible&&this.props.showFullBlur()}},{key:"render",value:function(){var e=this.props,n=e.cancel_button_text,t=e.children,o=e.confirm_button_text,r=e.onCancel,i=e.is_loading,c=e.is_visible,p=e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.CSSTransition,{appear:!0,in:c&&!i,timeout:50,classNames:{appear:"full-page-modal__background--enter",enter:"full-page-modal__background--enter",enterDone:"full-page-modal__background--enter-done",exit:"full-page-modal__background--exit"},unmountOnExit:!0},l.a.createElement("div",{className:"full-page-modal__background"})),l.a.createElement(u.CSSTransition,{appear:!0,in:c&&!i,timeout:50,classNames:{appear:"full-page-modal__wrapper--enter",enter:"full-page-modal__wrapper--enter",enterDone:"full-page-modal__wrapper--enter-done",exit:"full-page-modal__wrapper--exit"},unmountOnExit:!0},l.a.createElement("div",{className:"full-page-modal__wrapper"},l.a.createElement("div",{className:"full-page-modal__dialog"},l.a.createElement("h1",{className:"full-page-modal__header"},p),l.a.createElement("p",{className:"full-page-modal__content"},t),l.a.createElement("div",{className:"full-page-modal__footer"},r&&l.a.createElement(s.a,{className:a()("full-page-modal__button","btn--secondary","btn--secondary--orange"),has_effect:!0,text:n,onClick:this.handleCancel}),l.a.createElement(s.a,{className:a()("full-page-modal__button","btn--primary","btn--primary--orange"),has_effect:!0,text:o,onClick:this.handleConfirm}))))))}}])&&_(t.prototype,o),r&&_(t,r),n}();g.defaultProps={is_closed_on_cancel:!0,is_closed_on_confirm:!0},g.propTypes={cancel_button_text:c.a.string,confirm_button_text:c.a.string,hideFullBlur:c.a.func,is_closed_on_cancel:c.a.bool,is_closed_on_confirm:c.a.bool,is_loading:c.a.bool,is_visible:c.a.bool,onCancel:c.a.func,onConfirm:c.a.func,showFullBlur:c.a.func,title:c.a.string};var h=Object(p.b)(function(e){var n=e.ui;return{hideFullBlur:n.hideFullBlur,is_loading:n.is_loading,showFullBlur:n.showFullBlur}})(g);n.a=h},708:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(1),l=t.n(r),i=t(3),c=t(30),u=t(690),s=t(15),p=t(11),f=t(169),_=function(e){e.toggleUnsupportedContractModal(!1)},d=function(e){var n=e.is_visible,t=e.ui;return a.a.createElement(u.a,{title:Object(i.localize)("Whoops!"),confirm_button_text:Object(i.localize)("Continue to Binary.com"),cancel_button_text:Object(i.localize)("Back to trade page"),onConfirm:function(){return function(e){window.open(Object(c.urlFor)("user/portfoliows",void 0,void 0,!0),"_blank"),_(e)}(t)},onCancel:function(){return _(t)},is_closed_on_cancel:!0,is_visible:n},a.a.createElement(s.a,{i18n_default_text:"This trade type is currently not supported on {{website_name}}. Please go to Binary.com for details.",values:{website_name:f.b}}))};d.propTypes={client:l.a.object,is_visible:l.a.bool};var m=Object(p.b)(function(e){var n=e.ui;return{is_visible:n.is_unsupported_contract_modal_visible,ui:n}})(d);t.d(n,"default",function(){return m})}}]);
//# sourceMappingURL=UnsupportedContractModal.14ca6991fd49c679dc86.js.map