class Stopwatch extends React.Component {

  constructor() {
    super();

    //Początkowy stan komponentu
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };

    //Trzymanie kontekstu komponentu
    this.reset = this.reset.bind(this);
    this.print = this.print.bind(this);
    this.format = this.format.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.step = this.step.bind(this);
    this.calculate = this.calculate.bind(this);
    this.pad0 = this.pad0.bind(this);
    this.save = this.save.bind(this);
    this.deleteTimes = this.deleteTimes.bind(this);
    this.resetActualTimer = this.resetActualTimer.bind(this);
  }
  reset() {
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
  print() {
    this.display.innerText = this.format(this.state.times);
  }
  format(times) {
    return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
  }
  start() {
    if(!this.state.running) {
      this.state.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }
  stop () {
    this.state.running = false;
    clearInterval(this.watch);
  }
  step() {
    if(!this.state.running) return;
    this.calculate();
    this.print();
  }
  calculate () {
    this.state.times.miliseconds += 1;
    if(this.state.times.miliseconds >= 100){
      this.state.times.seconds += 1;
      this.state.times.miliseconds = 0;
    }
    if(this.state.times.seconds >= 60) {
      this.state.times.minutes += 1;
      this.state.times.seconds = 0;
    }
  }
  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
    }
    return result;
  }
  save() {
    let time = this.format(this.state.times);
    let item = document.createElement('li');
    let itemContent = document.createTextNode(time);
    item.appendChild(itemContent);
    this.results.appendChild(item);
  }
  deleteTimes () {
    if(!this.results.hasChildNodes()) { alert('Your list is empty...'); }
    else if(confirm('Are you sure to delete all measured results?')) {
      while(this.results.hasChildNodes()) {
        this.results.removeChild(this.results.firstChild);
      }
    }
  }
  resetActualTimer() {
    this.reset();
  }
  componentDidMount () {
    this.display = document.querySelector('.stopwatch');
    this.results = document.querySelector('.results');
  }
  render() {
    return (
      <div className={'app'}>
        <nav className={'controls'}>
          <button className={'btn btn-lg btn-success'} onClick={this.start}>Start</button>
          <button className={'btn btn-lg btn-danger'}  onClick={this.stop}>Stop</button>
          <button className={'btn btn-lg btn-primary'} onClick={this.save}>Save</button>
          <button className={'btn btn-lg btn-info'} onClick={this.reset}>Reset</button>
          <button className={'btn btn-lg btn-warning'} onClick={this.deleteTimes}>Delete results</button>
        </nav>
        <div className={'stopwatch'}>{ this.format(this.state.times) }</div>
        <ol className={'list-order results'}></ol>
      </div>
    );
  }
}
ReactDOM.render(<Stopwatch /, document.getElementById('app'));
