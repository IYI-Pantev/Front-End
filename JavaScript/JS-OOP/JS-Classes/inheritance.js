class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move shape");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
  //overriding parent method
  move() {
    super.move();
    console.log("moving circle");
  }
}

const c = new Circle("black", 7);
