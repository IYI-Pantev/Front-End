function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log(`drawing radius ${this.radius}`);
    }
};
c = new Circle(32);
c.draw();