"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStatebase = exports.withStatebase = exports.StatebaseProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _statebase = _interopRequireDefault(require("statebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
function (_React$PureComponent) {
  _inherits(StatebaseProvider, _React$PureComponent);

  function StatebaseProvider(props) {
    var _this;

    _classCallCheck(this, StatebaseProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatebaseProvider).call(this, props));
    _this.state = (0, _statebase["default"])(props.initialState);
    return _this;
  }

  _createClass(StatebaseProvider, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Statebase.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return StatebaseProvider;
}(_react["default"].PureComponent);

exports.StatebaseProvider = StatebaseProvider;

var withStatebase = function withStatebase(Component) {
  return (
    /*#__PURE__*/
    function (_React$PureComponent2) {
      _inherits(_class, _React$PureComponent2);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return _react["default"].createElement(Statebase.Consumer, null, function (state) {
            return _react["default"].createElement(Component, _extends({}, _this2.props, {
              statebase: state
            }));
          });
        }
      }]);

      return _class;
    }(_react["default"].PureComponent)
  );
};

exports.withStatebase = withStatebase;

var useStatebase = function useStatebase(ref) {
  var _useState = (0, _react.useState)(ref.val()),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    var unsub = ref.listen(function (snap) {
      setState(snap.val());
    });
    return function () {
      return unsub && unsub();
    }; // eslint-disable-next-line
  }, []);
  return [state, ref.set];
};

exports.useStatebase = useStatebase;
