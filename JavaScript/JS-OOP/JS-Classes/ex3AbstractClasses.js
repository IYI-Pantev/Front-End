class Shape {
  draw() {
    throw new Error("draw() method must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    //the parent constructor must be called
    //before this is accessed
    super();
    this.radius = radius;
  }

  draw() {
    return `drawing circle with ${this.radius} radius`;
  }
}

class Square extends Shape {
  draw() {
    return "Drawing a square";
  }
}

const c = new Circle(33);
const s = new Square();
const shapes = [s, c];
shapes.forEach((shape) => console.log(shape.draw()));
// Output:
// Drawing a circle
// Drawing a square
