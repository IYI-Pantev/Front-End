// ES6 WeakMap new type
// WeakMap is essentially a dictionary
// where keys are objects and
// values can be anything
// if there is no reference to keys they'll be
// garbage collected
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("moving", this);
    });
  }
  draw() {
    _move.get(this)();
    console.log("drawing", _radius.get(this));
  }
}

const c = new Circle(1);
c.draw();
