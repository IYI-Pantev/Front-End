// _ underscore is bad practice
// second way is Symbols
//Third way is with WeakMap

// Symbol is a ES6 primitive type
// Symbol is a function we call to generate a symbol
// Symbol is essentially a unique identifier
// every time we call it we get a unique identifier
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  // ES6 computed property names feature
  [_draw]() {
    console.log("drawing circle");
  }
}

const c = new Circle(1);
// console.log(c._radius); ==> undefined
// To get the symbol value
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
