function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { //can't be accessed in instance
        x: 0,
        y: 0
    };
    
    let computeOptimumLocation = function() { //can't be accessed in instance
        // ...
    }

    this.draw = function() {
        computeOptimumLocation();
        console.log('draw');
    }
}
const circle = new Circle(10);
