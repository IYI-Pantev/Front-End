// here Pascal Notation is used :
// OneTwo

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`drawing radius: ${this.radius}`);
  };
}

const c = new Circle(4);

c.draw();
