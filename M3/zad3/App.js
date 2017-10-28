"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      counter: 0
    };
    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: "increment",
    value: function increment() {
      this.setState({ counter: this.state.counter + 1 });
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.setState({ counter: this.state.counter - 1 });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "App" },
        React.createElement(
          "div",
          { className: "timer" },
          React.createElement(
            "span",
            null,
            "Licznik ",
            this.state.counter
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-primary", onClick: this.decrement },
            "Zmniejsz"
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-primary", onClick: this.increment },
            "Zwi\u0119ksz"
          )
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: 'app' },
        React.createElement(Counter, null),
        React.createElement(Counter, null),
        React.createElement(Counter, null),
        React.createElement(Counter, null)
      );
    }
  }]);

  return App;
}(React.Component);

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
