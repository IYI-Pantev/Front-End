function Shape() {
  Shape.prototype.color = "green";
  Shape.prototype.duplicate = function () {
    console.log("duplicate");
  };
}
// Before prototype inheritance
// implcit relationship
Circle.prototype = Object.create(Object.prototype);
// Circle.prototype.constructor = Circle
// new Circle.prototype.constructor() => new Circle();

// prototypical inheritance
Circle.prototype = Object.create(Shape.prototype);
// we should also reset the constructor
Circle.prototype.constructor = Circle;

function Circle(radius) {
  this.radius = radius;

  Circle.prototype.draw = function () {
    console.log("draw");
  };
}
const s = new Shape();
const c = new Circle(3);
console.log(c.color);
