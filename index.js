class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(newFrom) {
    if (typeof newFrom !== 'number') {
      throw new TypeError('Parametr no valid')
    }
    if (newFrom < this.to) {
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
    if (newTo < this.from) {
      throw new RangeError();
    }
    this._to = newTo;
  }

  get to() {
    return this._to;
  }

  get range() {
    const newArr = [this.from, this.to];
    return newArr;
  }
  validate(value) {
    if(this.from <= value && value <= this.to) {
      return value;
    }
    throw RangeError();
  }
}

const num = new RangeValidator(2, 16);
console.log(num);
console.log(num.validate(2));