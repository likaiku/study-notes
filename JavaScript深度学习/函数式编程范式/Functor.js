/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company: 
 * @Author: 林深
 * @Date: 2022-04-06 20:45:58
 * @LastEditors: 林深
 * @LastEditTime: 2022-04-06 20:50:23
 */
// class Container {
//   constructor (value) {
//     this._value = value;
//   }
//   map (fn) {
//     return new Container(fn(this._value));
//   }
// }

// let sum = new Container(5)
// .map(item => item + 1)
// .map(item => item * item)

// console.log(sum)

/**
 * @description: 优化
 * @param {*}
 * @return {*}
 * @Date: 2022-04-06 20:48:44
 * @author: 林深
 */
class Container {
  static of (value) {
    return new Container(value);
  }
  constructor(value) {
    this._value = value;
  }
  map (fn) {
    return new Container(fn(this._value));
  }
}

let sun = Container.of(4)
.map(x => x + 1)
.map(x => x * x)
console.log(sun);