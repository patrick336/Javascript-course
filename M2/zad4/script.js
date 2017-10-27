
var Counter = React.createClass({

  getInitialState: function() {
    return {
      counter: 0
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },
  componentDidMount: function() {
    console.log('Komponent już zmontowany,można przypinać zdarzenia. Można pobierać dane z serwera.');
  },
  render: function() {
    return React.createElement('div', {
      className: 'App'
    },
      React.createElement('div', {
        className: 'timer'
      },
        React.createElement('span', {}, 'Licznik ' + this.state.counter),
        React.createElement('button', {
          onClick: this.decrement,
          type: 'button',
          className: 'btn btn-primary js-btn-minus'
        }, 'Zmniejsz'),
        React.createElement('button', {
          onClick: this.increment,
          type: 'button',
          className: 'btn btn-primary js-btn-plus'
        }, 'Zwiększ')
      )
    );
  }
});

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));
