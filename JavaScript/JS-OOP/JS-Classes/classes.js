
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {return 1} // this will be in the instance
        
    }
    // Instance Method
    draw() { // all methods here will be in the Prototype
        console.log(`drawing radius of ${this.radius}`);
    }
    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

}

const c = new Circle.parse('{"radius": 1}');
Circle.parse()
// console.log(c.move());