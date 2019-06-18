(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/javascript/app/Assets/Common/icon-minus.jsx":
/*!*********************************************************!*\
  !*** ./src/javascript/app/Assets/Common/icon-minus.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconMinus = function IconMinus(_ref) {
    var className = _ref.className,
        is_disabled = _ref.is_disabled;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className, { disabled: is_disabled }), xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { className: 'color1-fill', fill: '#7f8397', fillRule: 'evenodd', d: 'M3 7.5h10v1H3z' })
    );
};

IconMinus.propTypes = {
    className: _propTypes2.default.string,
    is_disabled: _propTypes2.default.bool
};

exports.default = IconMinus;

/***/ })

}]);