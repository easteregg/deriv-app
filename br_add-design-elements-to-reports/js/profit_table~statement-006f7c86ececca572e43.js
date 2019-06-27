(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit_table~statement"],{

/***/ "./src/javascript/app/App/Components/Form/CompositeCalendar/composite-calendar.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Form/CompositeCalendar/composite-calendar.jsx ***!
  \*****************************************************************************************/
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

var _localize = __webpack_require__(/*! ../../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _inputField = __webpack_require__(/*! ../InputField/input-field.jsx */ "./src/javascript/app/App/Components/Form/InputField/input-field.jsx");

var _inputField2 = _interopRequireDefault(_inputField);

var _iconCalendar = __webpack_require__(/*! ../../../../Assets/Reports/icon-calendar.jsx */ "./src/javascript/app/Assets/Reports/icon-calendar.jsx");

var _iconCalendar2 = _interopRequireDefault(_iconCalendar);

var _Date = __webpack_require__(/*! ../../../../Utils/Date */ "./src/javascript/app/Utils/Date/index.js");

var _sideList = __webpack_require__(/*! ./side-list.jsx */ "./src/javascript/app/App/Components/Form/CompositeCalendar/side-list.jsx");

var _sideList2 = _interopRequireDefault(_sideList);

var _twoMonthPicker = __webpack_require__(/*! ./two-month-picker.jsx */ "./src/javascript/app/App/Components/Form/CompositeCalendar/two-month-picker.jsx");

var _twoMonthPicker2 = _interopRequireDefault(_twoMonthPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompositeCalendar = function (_React$PureComponent) {
    _inherits(CompositeCalendar, _React$PureComponent);

    function CompositeCalendar(props) {
        _classCallCheck(this, CompositeCalendar);

        var _this = _possibleConstructorReturn(this, (CompositeCalendar.__proto__ || Object.getPrototypeOf(CompositeCalendar)).call(this, props));

        var date = (0, _Date.toMoment)(props.to);

        _this.state = {
            show_to: false,
            show_from: false,
            selected_to_date: props.to ? props.to : date.clone().startOf('day').add(1, 'd').subtract(1, 's').unix(),
            selected_from_date: props.from ? props.from : null,
            list: [{ children: (0, _localize.localize)('All time'), onClick: function onClick() {
                    return _this.selectDateRange(0);
                }, duration: 0, is_active: true }, { children: (0, _localize.localize)('Last 7 days'), onClick: function onClick() {
                    return _this.selectDateRange(7);
                }, duration: 7, is_active: false }, { children: (0, _localize.localize)('Last 30 days'), onClick: function onClick() {
                    return _this.selectDateRange(30);
                }, duration: 30, is_active: false }, { children: (0, _localize.localize)('Last 60 days'), onClick: function onClick() {
                    return _this.selectDateRange(60);
                }, duration: 60, is_active: false }, { children: (0, _localize.localize)('Last quarter'), onClick: function onClick() {
                    return _this.selectDateRange(90);
                }, duration: 90, is_active: false }]
        };

        _this.setWrapperRef = _this.setWrapperRef.bind(_this);
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        return _this;
    }

    _createClass(CompositeCalendar, [{
        key: 'selectDateRange',
        value: function selectDateRange(from) {
            var _this2 = this;

            this.setState({
                selected_from_date: from ? (0, _Date.toMoment)().startOf('day').subtract(from, 'day').add(1, 's').unix() : null,
                selected_to_date: (0, _Date.toMoment)().startOf('day').unix()
            }, function () {
                _this2.setActiveList();
                _this2.hideCalendar();
                _this2.apply();
            });
        }
    }, {
        key: 'setActiveList',
        value: function setActiveList() {
            var _this3 = this;

            var copy = [].concat(_toConsumableArray(this.state.list));
            copy.forEach(function (item) {
                return item.is_active = !!_this3.isBoundToAList(item.duration);
            });
            if (!copy.some(function (item) {
                return item.is_active;
            })) {
                copy.forEach(function (item) {
                    if (item.duration === 0) {
                        item.is_active = true;
                    }
                });
            }
            this.setState({
                list: copy
            });
        }
    }, {
        key: 'hideCalendar',
        value: function hideCalendar() {
            this.setState({
                show_from: false,
                show_to: false
            });
        }
    }, {
        key: 'showCalendar',
        value: function showCalendar(e) {
            this.setState(_defineProperty({}, 'show_' + e, true));
        }
    }, {
        key: 'setWrapperRef',
        value: function setWrapperRef(node) {
            this.wrapperRef = node;
        }
    }, {
        key: 'handleClickOutside',
        value: function handleClickOutside(event) {
            if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                event.stopPropagation();
                event.preventDefault();
                this.hideCalendar();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'isBoundToAList',
        value: function isBoundToAList(duration) {
            var today = (0, _Date.toMoment)().startOf('day').unix();
            var to_date = (0, _Date.epochToMoment)(this.state.selected_to_date).startOf('day').unix();
            var from_date = (0, _Date.epochToMoment)(this.state.selected_from_date).startOf('day').unix();
            var that_day = (0, _Date.epochToMoment)(this.state.selected_to_date).startOf('day').subtract(duration, 'days').unix();

            return today === to_date && that_day === from_date;
        }
    }, {
        key: 'setToDate',
        value: function setToDate(date) {
            this.updateState('selected_to_date', (0, _Date.epochToMoment)(date).startOf('day').add(1, 'd').subtract(1, 's').unix());
        }
    }, {
        key: 'setFromDate',
        value: function setFromDate(date) {
            this.updateState('selected_from_date', date);
        }
    }, {
        key: 'updateState',
        value: function updateState(key, value) {
            var _this4 = this;

            this.setState(_defineProperty({}, key, value), function () {
                _this4.setActiveList();
                _this4.apply();
            });
        }
    }, {
        key: 'apply',
        value: function apply() {
            this.props.onChange({
                from: this.state.selected_from_date,
                to: this.state.selected_to_date
            });
        }
    }, {
        key: 'isPeriodDisabledTo',
        value: function isPeriodDisabledTo(date) {
            return date + 1 <= this.state.selected_from_date || date > (0, _Date.toMoment)().endOf('day').unix();
        }
    }, {
        key: 'isPeriodDisabledFrom',
        value: function isPeriodDisabledFrom(date) {
            return date - 1 >= this.state.selected_to_date;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                show_from = _state.show_from,
                show_to = _state.show_to,
                selected_to_date = _state.selected_to_date,
                selected_from_date = _state.selected_from_date,
                list = _state.list;


            return (
                // eslint-disable-next-line react/no-children-prop
                _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'composite-calendar__input-fields' },
                        _react2.default.createElement(_inputField2.default, { is_read_only: true, placeholder: (0, _localize.localize)('Date from'), icon: _iconCalendar2.default, onClick: this.showCalendar.bind(this, 'from'), value: this.from_date_label }),
                        _react2.default.createElement(_inputField2.default, { is_read_only: true, placeholder: (0, _localize.localize)('Date to'), icon: _iconCalendar2.default, onClick: this.showCalendar.bind(this, 'to'), value: this.to_date_label })
                    ),
                    show_to && _react2.default.createElement(
                        'div',
                        { className: 'composite-calendar', ref: this.setWrapperRef },
                        _react2.default.createElement(_sideList2.default, { items: list }),
                        _react2.default.createElement(_twoMonthPicker2.default, {
                            value: selected_to_date,
                            onChange: this.setToDate.bind(this),
                            isPeriodDisabled: this.isPeriodDisabledTo.bind(this)
                        })
                    ),
                    show_from && _react2.default.createElement(
                        'div',
                        { className: 'composite-calendar', ref: this.setWrapperRef },
                        _react2.default.createElement(_sideList2.default, { items: list }),
                        _react2.default.createElement(_twoMonthPicker2.default, {
                            value: selected_from_date,
                            onChange: this.setFromDate.bind(this),
                            isPeriodDisabled: this.isPeriodDisabledFrom.bind(this)
                        })
                    )
                )
            );
        }
    }, {
        key: 'to_date_label',
        get: function get() {
            var date = (0, _Date.epochToMoment)(this.state.selected_to_date);
            return (0, _Date.daysFromTodayTo)(date) === 0 ? (0, _localize.localize)('Today') : date.format('MMM, DD YYYY');
        }
    }, {
        key: 'from_date_label',
        get: function get() {
            var date = (0, _Date.epochToMoment)(this.state.selected_from_date);
            return this.state.selected_from_date ? date.format('MMM, DD YYYY') : '';
        }
    }]);

    return CompositeCalendar;
}(_react2.default.PureComponent);

CompositeCalendar.propTypes = {
    from: _propTypes2.default.number,
    onChange: _propTypes2.default.func,
    to: _propTypes2.default.number
};
exports.default = CompositeCalendar;

/***/ }),

/***/ "./src/javascript/app/App/Components/Form/CompositeCalendar/list-item.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Form/CompositeCalendar/list-item.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
    var onClick = _ref.onClick,
        is_active = _ref.is_active,
        children = _ref.children;
    return _react2.default.createElement(
        'li',
        {
            className: (0, _classnames2.default)({
                'composite-calendar__prepopulated-list--is-active': is_active
            }),
            onClick: onClick
        },
        children
    );
};

ListItem.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node, _propTypes2.default.array]),
    is_active: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
};

exports.default = ListItem;

/***/ }),

/***/ "./src/javascript/app/App/Components/Form/CompositeCalendar/side-list.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Form/CompositeCalendar/side-list.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _listItem = __webpack_require__(/*! ./list-item.jsx */ "./src/javascript/app/App/Components/Form/CompositeCalendar/list-item.jsx");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SideList = function SideList(_ref) {
    var items = _ref.items;
    return _react2.default.createElement(
        'ul',
        { className: 'composite-calendar__prepopulated-list' },
        items.map(function (item) {
            var duration = item.duration,
                is_active = item.is_active,
                rest_of_props = _objectWithoutProperties(item, ['duration', 'is_active']);

            return _react2.default.createElement(_listItem2.default, _extends({ key: duration, is_active: is_active || undefined }, rest_of_props));
        })
    );
};

SideList.propTypes = {
    items: _propTypes2.default.array
};

exports.default = SideList;

/***/ }),

/***/ "./src/javascript/app/App/Components/Form/CompositeCalendar/two-month-picker.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Form/CompositeCalendar/two-month-picker.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _calendarBody = __webpack_require__(/*! ../../Elements/Calendar/calendar-body.jsx */ "./src/javascript/app/App/Components/Elements/Calendar/calendar-body.jsx");

var _calendarBody2 = _interopRequireDefault(_calendarBody);

var _calendarHeader = __webpack_require__(/*! ../../Elements/Calendar/calendar-header.jsx */ "./src/javascript/app/App/Components/Elements/Calendar/calendar-header.jsx");

var _calendarHeader2 = _interopRequireDefault(_calendarHeader);

var _calendarFooter = __webpack_require__(/*! ../../Elements/Calendar/calendar-footer.jsx */ "./src/javascript/app/App/Components/Elements/Calendar/calendar-footer.jsx");

var _calendarFooter2 = _interopRequireDefault(_calendarFooter);

var _Date = __webpack_require__(/*! ../../../../Utils/Date */ "./src/javascript/app/Utils/Date/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwoMonthPicker = function (_React$PureComponent) {
    _inherits(TwoMonthPicker, _React$PureComponent);

    function TwoMonthPicker(props) {
        _classCallCheck(this, TwoMonthPicker);

        var _this = _possibleConstructorReturn(this, (TwoMonthPicker.__proto__ || Object.getPrototypeOf(TwoMonthPicker)).call(this, props));

        _this.state = {
            left_pane_date: (0, _Date.subMonths)(props.value, 1).unix(),
            right_pane_date: props.value
        };
        return _this;
    }

    _createClass(TwoMonthPicker, [{
        key: 'navigateFrom',
        value: function navigateFrom(e) {
            this.setState({
                left_pane_date: e.unix(),
                right_pane_date: (0, _Date.addMonths)(e, 1).unix()
            });
        }

        /**
         * Only allow previous months to be available to navigate. Disable other periods
         *
         * @param date
         * @param range
         * @returns {boolean}
         */

    }, {
        key: 'validateFromArrows',
        value: function validateFromArrows(date, range) {
            return range === 'year' || (0, _Date.diffInMonths)((0, _Date.epochToMoment)(this.state.left_pane_date), date) !== -1;
        }

        /**
         * Validate values to be date_from < date_to
         */

    }, {
        key: 'shouldDisableDate',
        value: function shouldDisableDate(date) {
            return this.props.isPeriodDisabled(date.unix());
        }

        /**
         * Only allow next month to be available to navigate (unless next month is in the future).
         * Disable other periods
         *
         * @param date
         * @param range
         * @returns {boolean}
         */

    }, {
        key: 'validateToArrows',
        value: function validateToArrows(date, range) {
            if (range === 'year') return true; // disallow year arrows
            var r_date = (0, _Date.epochToMoment)(this.state.right_pane_date).startOf('month');
            if ((0, _Date.diffInMonths)((0, _Date.toMoment)().startOf('month'), r_date) === 0) return true; // future months are disallowed
            return (0, _Date.diffInMonths)(r_date, date) !== 1;
        }
    }, {
        key: 'jumpToCurrentMonth',
        value: function jumpToCurrentMonth() {
            var current_month = (0, _Date.toMoment)().endOf('month').unix();
            this.setState({
                left_pane_date: (0, _Date.epochToMoment)(current_month).endOf('month').subtract(1, 'month').unix(),
                right_pane_date: current_month
            });
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(e) {
            this.setState({
                left_pane_date: (0, _Date.subMonths)(e, 1).unix(),
                right_pane_date: (0, _Date.toMoment)(e).unix()
            });
        }
    }, {
        key: 'updateSelectedDate',
        value: function updateSelectedDate(e) {
            this.props.onChange(_moment2.default.utc(e.currentTarget.dataset.date, 'YYYY-MM-DD').unix());
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                right_pane_date = _state.right_pane_date,
                left_pane_date = _state.left_pane_date;


            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'first-month' },
                    _react2.default.createElement(_calendarHeader2.default, {
                        calendar_date: left_pane_date,
                        calendar_view: 'date',
                        navigateTo: this.navigateFrom.bind(this),
                        isPeriodDisabled: this.validateFromArrows.bind(this),
                        hide_disabled_periods: true,
                        switchView: function switchView() {
                            return {};
                        }
                    }),
                    _react2.default.createElement(_calendarBody2.default, {
                        calendar_view: 'date',
                        calendar_date: left_pane_date,
                        selected_date: this.props.value,
                        date_format: 'YYYY-MM-DD',
                        isPeriodDisabled: this.shouldDisableDate.bind(this),
                        hide_others: true,
                        updateSelected: this.updateSelectedDate.bind(this)
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'second-month' },
                    _react2.default.createElement(_calendarHeader2.default, {
                        calendar_date: right_pane_date,
                        calendar_view: 'date',
                        isPeriodDisabled: this.validateToArrows.bind(this),
                        navigateTo: this.navigateTo.bind(this),
                        hide_disabled_periods: true,
                        switchView: function switchView() {
                            return {};
                        }
                    }),
                    _react2.default.createElement(_calendarBody2.default, {
                        calendar_view: 'date',
                        calendar_date: right_pane_date,
                        selected_date: this.props.value,
                        date_format: 'YYYY-MM-DD',
                        isPeriodDisabled: this.shouldDisableDate.bind(this),
                        hide_others: true,
                        updateSelected: this.updateSelectedDate.bind(this)
                    }),
                    _react2.default.createElement(_calendarFooter2.default, { use_icon: 'IconCalendarForwardToday', has_today_btn: true, onClick: this.jumpToCurrentMonth.bind(this) })
                )
            );
        }
    }]);

    return TwoMonthPicker;
}(_react2.default.PureComponent);

TwoMonthPicker.propTypes = {
    isPeriodDisabled: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    value: _propTypes2.default.number
};
exports.default = TwoMonthPicker;

/***/ }),

/***/ "./src/javascript/app/Assets/Reports/icon-calendar.jsx":
/*!*************************************************************!*\
  !*** ./src/javascript/app/Assets/Reports/icon-calendar.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconCalendar = function IconCalendar(_ref) {
    var className = _ref.className,
        props = _objectWithoutProperties(_ref, ['className']);

    return _react2.default.createElement(
        'svg',
        _extends({ className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16' }, props),
        _react2.default.createElement(
            'g',
            { fill: '#7F8397', fillRule: 'nonzero' },
            _react2.default.createElement('path', { className: 'color1-fill', d: 'M4 3H2v11h12V3h-2v.5a.5.5 0 1 1-1 0V3H5v.5a.5.5 0 0 1-1 0V3zm1-1h6v-.5a.5.5 0 1 1 1 0V2h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2v-.5a.5.5 0 0 1 1 0V2zM2 5h12v1H2V5z' }),
            _react2.default.createElement('path', { className: 'color1-fill', d: 'M10.134 9H4.5a.5.5 0 0 1 0-1h5.634a1 1 0 1 1 0 1zM4 11h7.5a.5.5 0 1 1 0 1H4v-1z' })
        )
    );
};

IconCalendar.propTypes = {
    className: _propTypes2.default.string,
    classNamePath: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};

exports.default = IconCalendar;

/***/ })

}]);