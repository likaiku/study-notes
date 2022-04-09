/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company: 
 * @Author: 林深
 * @Date: 2022-04-09 15:11:20
 * @LastEditors: 林深
 * @LastEditTime: 2022-04-09 15:22:31
 */
const fp = require('lodash/fp');

class IO {
  static of (x) {
    return new IO(function () {
      return x;
    })
  }
  constructor(fn) {
    this._value = fn
  }

  map (fn) {
    // 把当前的 value 和传入的 fn 组合成一个新的函数
    return new IO(fp.flowRight(fn, this._value));
  }
}

let  p = IO.of(process)
.map(p =>  p.execPath)

console.log(p);
console.log(p._value());