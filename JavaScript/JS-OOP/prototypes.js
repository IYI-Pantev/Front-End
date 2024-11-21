let x = {};
let y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
// depracated way
console.log(x.__proto__ === y.__proto__);
