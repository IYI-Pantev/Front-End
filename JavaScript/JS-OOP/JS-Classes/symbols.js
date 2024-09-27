const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log(`drawing ${this[_radius]} radius`);
  }
}

const c = new Circle(5);
const key = Object.getOwnPropertySymbols(c)[0];

c[_draw]();
