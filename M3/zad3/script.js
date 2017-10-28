const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));

class App extends React.Component {
  render() {
    return (
      <div className={'app'}>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement () {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div className={"App"}>
        <div className={"timer"}>
          <span>Licznik {this.state.counter}</span>
          <button type={"button"} className={"btn btn-primary"} onClick={this.decrement}>Zmniejsz</button>
          <button type={"button"} className={"btn btn-primary"} onClick={this.increment}>Zwiększ</button>
        </div>
      </div>
    );
  }
}
