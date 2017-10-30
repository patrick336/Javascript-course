class Stopwatch {

  constructor(display) {
    this.results = document.querySelector('.results');
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }
  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }
  print() {
    this.display.innerText = this.format(this.times);
  }
  format(times) {
    return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
  }
  start() {
    if(!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(),10);
    }
  }
  stop () {
    this.running = false;
    clearInterval(this.watch);
  }
  step() {
    if(!this.running) return;
    this.calculate();
    this.print();
  }
  calculate () {
    this.times.miliseconds += 1;
    if(this.times.miliseconds >= 100){
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if(this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
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
    let time = this.format(this.times);
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
    this.stop();
    this.reset();
    this.print();
  }
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

const starButton = document.getElementById('js-start');
starButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('js-stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const saveButton = document.getElementById('js-save');
saveButton.addEventListener('click', () => stopwatch.save());

const deleteButton = document.getElementById('js-delete');
deleteButton.addEventListener('click', () => stopwatch.deleteTimes());

const resetButton = document.getElementById('js-reset');
resetButton.addEventListener('click', () => stopwatch.resetActualTimer());
