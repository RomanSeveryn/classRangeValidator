class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(newFrom) {
    if (typeof newFrom !== 'number') {
      throw new TypeError('Parametr no valid')
    }
    if (newFrom < 0) {
      throw new RangeError();
    }
    this._from = newFrom;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (typeof newTo !== 'number') {
      throw new TypeError('Parametr no valid')
    }
    if (newTo < 0) {
      throw new RangeError();
    }
    this._to = newTo;
  }

  get to() {
    return this._to;
  }

  get range() {
    const newArr = [];
    newArr[0] = this.from;
    newArr[1] = this.to;
    return newArr;
  }
  validate(value) {
    return this.from <= value && value <= this.to;
    
  }
}

const num = new RangeValidator(2, 16);
console.log(num);
console.log(num.validate(2));