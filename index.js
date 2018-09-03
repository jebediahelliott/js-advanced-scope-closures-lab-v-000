function produceDrivingRange(range) {
  return function (start, finish) {
    start.length = 2;
    finish.length = 2;

    const distance = Math.abs(parseInt(start) - parseInt(finish));

    if (distance > range){
      return `${distance - range} blocks out of range`;
    }else {
      return `within range by ${range - distance}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(total) {
    return total * percentage;
  }
}

function createDriver() {
  let id = 0;

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++id;
    }
  }
}
