'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    //Początkowy stan komponentu
    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };

    //Trzymanie kontekstu komponentu
    _this.reset = _this.reset.bind(_this);
    _this.print = _this.print.bind(_this);
    _this.format = _this.format.bind(_this);
    _this.start = _this.start.bind(_this);
    _this.stop = _this.stop.bind(_this);
    _this.step = _this.step.bind(_this);
    _this.calculate = _this.calculate.bind(_this);
    _this.pad0 = _this.pad0.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.deleteTimes = _this.deleteTimes.bind(_this);
    _this.resetActualTimer = _this.resetActualTimer.bind(_this);
    return _this;
  }

  _createClass(Stopwatch, [{
    key: 'reset',
    value: function reset() {
      this.stop();
      this.state = {
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      };
      this.print();
    }
  }, {
    key: 'print',
    value: function print() {
      this.display.innerText = this.format(this.state.times);
    }
  }, {
    key: 'format',
    value: function format(times) {
      return this.pad0(times.minutes) + ':' + this.pad0(times.seconds) + ':' + this.pad0(Math.floor(times.miliseconds));
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.state.running = true;
        this.watch = setInterval(function () {
          return _this2.step();
        }, 10);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.state.running = false;
      clearInterval(this.watch);
    }
  }, {
    key: 'step',
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
      this.print();
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      this.state.times.miliseconds += 1;
      if (this.state.times.miliseconds >= 100) {
        this.state.times.seconds += 1;
        this.state.times.miliseconds = 0;
      }
      if (this.state.times.seconds >= 60) {
        this.state.times.minutes += 1;
        this.state.times.seconds = 0;
      }
    }
  }, {
    key: 'pad0',
    value: function pad0(value) {
      var result = value.toString();
      if (result.length < 2) {
        result = '0' + result;
      }
      return result;
    }
  }, {
    key: 'save',
    value: function save() {
      var time = this.format(this.state.times);
      var item = document.createElement('li');
      var itemContent = document.createTextNode(time);
      item.appendChild(itemContent);
      this.results.appendChild(item);
    }
  }, {
    key: 'deleteTimes',
    value: function deleteTimes() {
      if (!this.results.hasChildNodes()) {
        alert('Your list is empty...');
      } else if (confirm('Are you sure to delete all measured results?')) {
        while (this.results.hasChildNodes()) {
          this.results.removeChild(this.results.firstChild);
        }
      }
    }
  }, {
    key: 'resetActualTimer',
    value: function resetActualTimer() {
      this.reset();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.display = document.querySelector('.stopwatch');
      this.results = document.querySelector('.results');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          'nav',
          { className: 'controls' },
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-success', onClick: this.start },
            'Start'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-danger', onClick: this.stop },
            'Stop'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-primary', onClick: this.save },
            'Save'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-info', onClick: this.reset },
            'Reset'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-warning', onClick: this.deleteTimes },
            'Delete results'
          )
        ),
        React.createElement(
          'div',
          { className: 'stopwatch' },
          this.format(this.state.times)
        ),
        React.createElement('ol', { className: 'list-order results' })
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
