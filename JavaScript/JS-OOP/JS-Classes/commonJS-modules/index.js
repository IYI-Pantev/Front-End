//commonJS formta
const Circle = require('./circle') // const {Circle, Square} = require('./shapes');


const c = new Circle(10);
// console.log(_radius.get(c)); // can't access it - Private
c.draw();