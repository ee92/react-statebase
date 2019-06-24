"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStatebase = exports.StatebaseProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _statebase = _interopRequireDefault(require("statebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Statebase = _react["default"].createContext(null);

var StatebaseProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatebaseProvider, _React$Component);

  function StatebaseProvider(props) {
    var _this;

    _classCallCheck(this, StatebaseProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatebaseProvider).call(this, props));
    _this.statebase = (0, _statebase["default"])(props.initialState);
    return _this;
  }

  _createClass(StatebaseProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.unsub = this.statebase.listen(function () {
        return _this2.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsub && this.unsub();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(Statebase.Provider, {
        value: this.statebase
      }, this.props.children);
    }
  }]);

  return StatebaseProvider;
}(_react["default"].Component);

exports.StatebaseProvider = StatebaseProvider;

var withStatebase = function withStatebase(Component) {
  return function (props) {
    return _react["default"].createElement(Statebase.Consumer, null, function (state) {
      return _react["default"].createElement(Component, _extends({}, props, {
        statebase: state
      }));
    });
  };
};

exports.withStatebase = withStatebase;
