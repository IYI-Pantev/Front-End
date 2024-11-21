function Shape(color) {
  this.color = color;
  Shape.prototype.duplicate = function () {
    console.log(`duplicate ${this.color} ${Shape.name} `);
  };
}

function inherit(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

inherit(Square, Shape);

// Method overriding
function Square(size, color) {
  // overriding inside the object
  //   this.duplicate = function () {
  //     console.log(`duplicating ${Square.name}`);
  //   };
  this.size = size;
  Shape.call(this, color);
}
// method overriding with prototype
Square.prototype.duplicate = function () {
  console.log(`duplicating ${this.color} ${Square.name}`);
};
const shape = new Shape("blue");
const square = new Square(1, "red");
// square.duplicate();

// Polymorphism
const shapes = [square, shape];
shapes.forEach((shape) => shape.duplicate());
