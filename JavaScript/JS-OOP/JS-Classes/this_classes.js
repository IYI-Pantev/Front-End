// By default the body of the Classes
// Are executed in the strict mode
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw();
