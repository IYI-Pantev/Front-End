class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    return `drawing ${this.color} shape.`;
  }
}

const shape = new Shape("green");
