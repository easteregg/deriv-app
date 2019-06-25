(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports"],{

/***/ "./src/javascript/app/App/Components/Elements/Label/label.jsx":
/*!********************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/Label/label.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var available_modes = ['default', 'success', 'warn', 'danger', 'info', 'success-invert', 'warn-invert'];

var available_sizes = ['regular', 'large'];

var Label = function Label(_ref) {
    var _classNames;

    var mode = _ref.mode,
        children = _ref.children,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'regular' : _ref$size;

    var type = available_modes.some(function (m) {
        return m === mode;
    }) ? mode : 'default';
    var scale = available_sizes.some(function (s) {
        return s === size;
    }) ? size : 'regular';

    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('label', (_classNames = {}, _defineProperty(_classNames, 'label--' + scale, scale), _defineProperty(_classNames, 'label--' + type, type), _classNames))
        },
        children
    );
};
Label.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    mode: _propTypes2.default.oneOf(available_modes)
};
exports.default = Label;

/***/ }),

/***/ "./src/javascript/app/Modules/Reports/Containers/reports.jsx":
/*!*******************************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/Containers/reports.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app/Stores/connect.js");

var _Animations = __webpack_require__(/*! ../../../App/Components/Animations */ "./src/javascript/app/App/Components/Animations/index.js");

var _verticalTab = __webpack_require__(/*! ../../../App/Components/Elements/VerticalTabs/vertical-tab.jsx */ "./src/javascript/app/App/Components/Elements/VerticalTabs/vertical-tab.jsx");

var _verticalTab2 = _interopRequireDefault(_verticalTab);

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _walletInformation = __webpack_require__(/*! ./wallet-information.jsx */ "./src/javascript/app/Modules/Reports/Containers/wallet-information.jsx");

var _walletInformation2 = _interopRequireDefault(_walletInformation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reports = function (_React$Component) {
    _inherits(Reports, _React$Component);

    function Reports() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Reports);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Reports.__proto__ || Object.getPrototypeOf(Reports)).call.apply(_ref, [this].concat(args))), _this), _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target)) {
                _this.props.history.push(_routes2.default.trade);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Reports, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // SmartCharts keeps saving layout for ContractPlay even if layouts prop is set to null
            // As a result, we have to remove it manually for each SmartChart instance in ContractReplay
            // TODO: Remove this once SmartCharts finds a way to stop ChartIQ from saving layouts to localStorage
            localStorage.removeItem('layout-contract-replay');
            this.props.showBlur();
            document.addEventListener('mousedown', this.handleClickOutside);
            this.props.toggleReports(true);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.toggleReports(false);
            this.props.hideBlur();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var menu_options = function menu_options() {
                var options = [];

                _this2.props.routes.forEach(function (route) {
                    options.push({
                        default: route.default,
                        icon: route.icon_component,
                        label: route.title,
                        value: route.component,
                        path: route.path
                    });
                });

                return options;
            };

            var action_bar_items = [{
                onClick: function onClick() {
                    _this2.props.history.push(_routes2.default.trade);
                    _this2.props.toggleReports(false);
                },
                icon: 'SettingsIconClose',
                title: (0, _localize.localize)('Close')
            }, {
                component: function component() {
                    return _react2.default.createElement(_walletInformation2.default, null);
                },
                title: ''
            }];
            return _react2.default.createElement(
                _Animations.FadeWrapper,
                {
                    is_visible: this.props.is_visible,
                    className: 'reports-page-wrapper',
                    keyname: 'reports-page-wrapper'
                },
                _react2.default.createElement(
                    'div',
                    { className: 'reports', ref: this.setWrapperRef },
                    _react2.default.createElement(_verticalTab2.default, {
                        header_title: (0, _localize.localize)('Reports'),
                        action_bar: action_bar_items,
                        action_bar_classname: 'reports__inset_header',
                        alignment: 'center',
                        classNameHeader: 'reports__tab-header',
                        current_path: this.props.location.pathname,
                        is_routed: true,
                        is_full_width: true,
                        list: menu_options()
                    })
                )
            );
        }
    }]);

    return Reports;
}(_react2.default.Component);

Reports.propTypes = {
    hideBlur: _propTypes2.default.func,
    history: _propTypes2.default.object,
    is_visible: _propTypes2.default.bool,
    location: _propTypes2.default.object,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.object),
    showBlur: _propTypes2.default.func,
    toggleReports: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        hideBlur: ui.hideRouteBlur,
        is_visible: ui.is_reports_visible,
        showBlur: ui.showRouteBlur,
        toggleReports: ui.toggleReports
    };
})((0, _reactRouterDom.withRouter)(Reports));

/***/ }),

/***/ "./src/javascript/app/Modules/Reports/Containers/wallet-information.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/Containers/wallet-information.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _icon = __webpack_require__(/*! ../../../Assets/icon.jsx */ "./src/javascript/app/Assets/icon.jsx");

var _icon2 = _interopRequireDefault(_icon);

var _currency_base = __webpack_require__(/*! ../../../../_common/base/currency_base */ "./src/javascript/_common/base/currency_base.js");

var _label = __webpack_require__(/*! ../../../App/Components/Elements/Label/label.jsx */ "./src/javascript/app/App/Components/Elements/Label/label.jsx");

var _label2 = _interopRequireDefault(_label);

var _localize = __webpack_require__(/*! ../../../App/Components/Elements/localize.jsx */ "./src/javascript/app/App/Components/Elements/localize.jsx");

var _localize2 = _interopRequireDefault(_localize);

var _money = __webpack_require__(/*! ../../../App/Components/Elements/money.jsx */ "./src/javascript/app/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WalletInformation = function WalletInformation(_ref) {
    var currency = _ref.currency,
        balance = _ref.balance,
        is_virtual = _ref.is_virtual,
        loginid = _ref.loginid;

    var is_currency_ready = Object.keys((0, _currency_base.getCurrencies)()).length > 0;
    return _react2.default.createElement(
        'div',
        { className: 'account-wallet' },
        !is_virtual && _react2.default.createElement(_icon2.default, { icon: 'IconAccountsCurrency', type: currency.toLowerCase() }),
        is_virtual && _react2.default.createElement(_icon2.default, { icon: 'IconDemo' }),
        _react2.default.createElement(
            'span',
            { className: 'description' },
            _react2.default.createElement(_localize2.default, { str: (is_virtual ? 'Practice' : currency.toUpperCase()) + ' wallet' })
        ),
        _react2.default.createElement(
            'span',
            { className: 'current-loginid' },
            loginid
        ),
        is_currency_ready && _react2.default.createElement(
            _label2.default,
            { mode: '' + (is_virtual ? 'warn-invert' : 'success-invert'), size: 'large' },
            _react2.default.createElement(_money2.default, { amount: balance, currency: currency })
        ),
        !is_currency_ready && _react2.default.createElement('div', null)
    );
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var client = _ref2.client;
    return {
        balance: client.balance,
        currency: client.currency,
        is_virtual: client.is_virtual,
        loginid: client.loginid
    };
})(WalletInformation);

/***/ }),

/***/ "./src/javascript/app/Modules/Reports/index.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _reports = __webpack_require__(/*! ./Containers/reports.jsx */ "./src/javascript/app/Modules/Reports/Containers/reports.jsx");

var _reports2 = _interopRequireDefault(_reports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reports2.default;

/***/ })

}]);