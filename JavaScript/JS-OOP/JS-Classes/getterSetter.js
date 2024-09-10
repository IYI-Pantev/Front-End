const _radius = Symbol('radius');

class Circle {
    constructor(radius) {
        this[_radius] = radius;
        this.pass = '0101';
    }

    get radius() {
        return this[_radius];
    }

    set radius(value) {
        if (value <= 0) throw new Error('invalid radius');
         this[_radius] = value;
    }
}
const c = new Circle(1);