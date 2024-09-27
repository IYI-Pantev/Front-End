class Circle {
  // class property
  static shape = "oval";

  constructor(radius) {
    this.radius = radius;
    // this.move = function() {return 1} // this will be in the instance
  }
  // Instance Method
  draw() {
    // all methods here will be in the Prototype
    console.log(`drawing radius of ${this.radius}`);
  }
  // Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }

  static get_shape() {
    console.log(this.shape);
  }
}

const c = new Circle(4);
c.draw();
// console.log(c.move());
Circle.get_shape();
