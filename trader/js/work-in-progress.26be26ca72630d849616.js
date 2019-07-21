(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-in-progress"],{

/***/ "./App/Containers/Wip/index.js":
/*!*************************************!*\
  !*** ./App/Containers/Wip/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wip_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wip.jsx */ \"./App/Containers/Wip/wip.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _wip_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XaXAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9XaXAvaW5kZXguanM/NGEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3dpcC5qc3gnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/Wip/index.js\n");

/***/ }),

/***/ "./App/Containers/Wip/wip.jsx":
/*!************************************!*\
  !*** ./App/Containers/Wip/wip.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_base_socket_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _common/base/socket_base */ \"./_common/base/socket_base.js\");\n/* harmony import */ var _common_base_socket_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_base_socket_base__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _common/url */ \"./_common/url.js\");\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! App/Components/Elements/localize.jsx */ \"./App/Components/Elements/localize.jsx\");\n/* harmony import */ var App_Components_Form_button_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! App/Components/Form/button.jsx */ \"./App/Components/Form/button.jsx\");\n/* harmony import */ var Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Assets/icon.jsx */ \"./Assets/icon.jsx\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var Sass_app_common_components_wip_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Sass/app/_common/components/wip.scss */ \"./sass/app/_common/components/wip.scss\");\n/* harmony import */ var Sass_app_common_components_wip_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(Sass_app_common_components_wip_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar onClick = function onClick(e) {\n  e.preventDefault();\n  window.open(Object(_common_url__WEBPACK_IMPORTED_MODULE_3__[\"urlFor\"])('trading', undefined, undefined, true), '_blank', 'noopener, noreferrer');\n};\n\nvar Wip = function Wip(_ref) {\n  var is_dark_mode = _ref.is_dark_mode,\n      pushDataLayer = _ref.pushDataLayer;\n  _common_base_socket_base__WEBPACK_IMPORTED_MODULE_1___default.a.wait('website_status').then(function () {\n    pushDataLayer({\n      event: 'page_load'\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"work-in-progress\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"work-in-progress__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    icon: \"IconWip\",\n    theme: is_dark_mode ? 'dark' : 'light'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"work-in-progress__header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    i18n_default_text: \"Work in progress!\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"work-in-progress__text\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    i18n_default_text: \"This is currently unavailable for mobile devices.\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App_Components_Form_button_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"work-in-progress__btn\",\n    classNameSpan: \"work-in-progress__btn--span\",\n    onClick: onClick,\n    text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Take me to SmartTrader')\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (_ref2) {\n  var ui = _ref2.ui,\n      gtm = _ref2.gtm;\n  return {\n    is_dark_mode: ui.is_dark_mode_on,\n    pushDataLayer: gtm.pushDataLayer\n  };\n})(Wip));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XaXAvd2lwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1dpcC93aXAuanN4P2Q1OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmluYXJ5U29ja2V0IGZyb20gJ19jb21tb24vYmFzZS9zb2NrZXRfYmFzZSc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0FwcC9pMThuJztcbmltcG9ydCB7IHVybEZvciB9ICAgZnJvbSAnX2NvbW1vbi91cmwnO1xuaW1wb3J0IExvY2FsaXplICAgICBmcm9tICdBcHAvQ29tcG9uZW50cy9FbGVtZW50cy9sb2NhbGl6ZS5qc3gnO1xuaW1wb3J0IEJ1dHRvbiAgICAgICBmcm9tICdBcHAvQ29tcG9uZW50cy9Gb3JtL2J1dHRvbi5qc3gnO1xuaW1wb3J0IEljb24gICAgICAgICBmcm9tICdBc3NldHMvaWNvbi5qc3gnO1xuaW1wb3J0IHsgY29ubmVjdCB9ICBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgJ1Nhc3MvYXBwL19jb21tb24vY29tcG9uZW50cy93aXAuc2Nzcyc7XG5cbmNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cub3Blbih1cmxGb3IoJ3RyYWRpbmcnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSksICdfYmxhbmsnLCAnbm9vcGVuZXIsIG5vcmVmZXJyZXInKTtcbn07XG5cbmNvbnN0IFdpcCA9ICh7IGlzX2RhcmtfbW9kZSwgcHVzaERhdGFMYXllciB9KSA9PiB7XG4gICAgQmluYXJ5U29ja2V0LndhaXQoJ3dlYnNpdGVfc3RhdHVzJykudGhlbigoKSA9PiB7XG4gICAgICAgIHB1c2hEYXRhTGF5ZXIoeyBldmVudDogJ3BhZ2VfbG9hZCcgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd29yay1pbi1wcm9ncmVzcyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd29yay1pbi1wcm9ncmVzc19fY29udGVudCc+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNvbldpcCcgdGhlbWU9e2lzX2RhcmtfbW9kZSA/ICdkYXJrJyA6ICdsaWdodCd9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dvcmstaW4tcHJvZ3Jlc3NfX2hlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nV29yayBpbiBwcm9ncmVzcyEnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dvcmstaW4tcHJvZ3Jlc3NfX3RleHQnPlxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1RoaXMgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxlIGZvciBtb2JpbGUgZGV2aWNlcy4nIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvcmstaW4tcHJvZ3Jlc3NfX2J0bidcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lU3Bhbj0nd29yay1pbi1wcm9ncmVzc19fYnRuLS1zcGFuJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGl6ZSgnVGFrZSBtZSB0byBTbWFydFRyYWRlcicpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHsgdWksIGd0bSB9KSA9PiAoXG4gICAge1xuICAgICAgICBpc19kYXJrX21vZGUgOiB1aS5pc19kYXJrX21vZGVfb24sXG4gICAgICAgIHB1c2hEYXRhTGF5ZXI6IGd0bS5wdXNoRGF0YUxheWVyLFxuICAgIH1cbikpKFdpcCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/Wip/wip.jsx\n");

/***/ }),

/***/ "./sass/app/_common/components/wip.scss":
/*!**********************************************!*\
  !*** ./sass/app/_common/components/wip.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9fY29tbW9uL2NvbXBvbmVudHMvd2lwLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL2FwcC9fY29tbW9uL2NvbXBvbmVudHMvd2lwLnNjc3M/MmUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/app/_common/components/wip.scss\n");

/***/ })

}]);