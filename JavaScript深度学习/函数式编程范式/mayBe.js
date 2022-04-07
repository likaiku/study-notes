/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company: 
 * @Author: 林深
 * @Date: 2022-04-07 20:32:05
 * @LastEditors: 林深
 * @LastEditTime: 2022-04-07 20:40:08
 */
class MayBe {
  static of (value) {
    return new MayBe(value);
  }
  constructor (value) {
    this._value = value;
  }
  map (fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
  }
  isNothing () {
    return this._value === null || this._value === undefined
  }
}

let r1 = MayBe.of('hello world!')
.map(str => str.toUpperCase())
let r2 = MayBe.of(undefined)
.map(str => str.toUpperCase())

console.log(r1)
console.log(r2)