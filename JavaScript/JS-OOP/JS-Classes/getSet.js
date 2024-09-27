const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // better to Get
  //   getRadius() {
  //     return _radius.get(this);
  //   }

  // Object.defineProperty(this, 'radius', {})

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}
