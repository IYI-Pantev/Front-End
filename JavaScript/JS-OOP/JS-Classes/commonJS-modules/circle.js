//implementation detail
const _radius = new WeakMap();
//public interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

//CommonJS modules
// keyword module; exports object
module.exports/*.Circle*/ = Circle; // module.exports = {Circle, Square...};

// we can give as many as we need Classes:
// module.exports.Square = Circle;