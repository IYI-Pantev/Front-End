function Shape(color) {
    this.color = color;
}


Shape.prototype.duplicate = function() {
    console.log('duplicate shape');
}
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

}

function Circle(radius, color) {

    Shape.call(this, color);    

    this.radius = radius;
}


// Circle.prototype = Object.create(Object.prototype); // object base
extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicating Circle');
}
Circle.prototype.draw = function() {
    console.log(`drawing in ${this.radius} radius`);
}


function Square(size, color) {
    this.size = size;
    Shape.call(this, color);

}
extend(Square, Shape);
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square;
Square.prototype.duplicate = function() {
    
    Shape.prototype.duplicate.call(this);
    console.log('+----+')
    console.log('duplicating Square');
}

// c1 = new Circle(24, 'green');
// // c1.draw()
// // // s1 = new Shape();
// // // s1.duplicate();
// c1.duplicate();
// console.log(c1.color);
// sq = new Square(10, 'blue');
// sq.duplicate();

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes) {
    shape.duplicate()
}