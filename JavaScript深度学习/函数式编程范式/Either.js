/*
 * @Description: 不积跬步，无以至千里
 * @version: 0.0.1
 * @Company: 
 * @Author: 林深
 * @Date: 2022-04-07 20:50:04
 * @LastEditors: 林深
 * @LastEditTime: 2022-04-07 21:09:04
 */
class Left {
  static of (value) {
    return new Left(value);
  }
  constructor(value) {
    this._value = value;
  }
  map (fn) {
    return this;
  }
}

class Right {
  static of (value) {
    return new Right(value)
  }
  constructor(value) {
    this._value = value;
  }
  map (fn) {
    return Right.of(fn(this._value));
  }
}

function parseJson (str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (e) {
    return Left.of({ error: e.message })
  }
}

let result = parseJson('{"name": "ls"}')
  .map(item => item.name.toUpperCase())
console.log(result);