function Circle(radius) {
  this.radius = radius;

  let defaultLocation = {
    //can't be accessed in instance
    x: 3,
    y: 3,
  };

  let computeOptimumLocation = function () {
    //can't be accessed in instance
    // ...
  };

  Object.defineProperty(this, "defaultLocation", {
    // strict access to property
    configurable: false,
    get: function () {
      return defaultLocation;
    },
    // set: function(value) {
    //     if (!value.x || !value.y)
    //         throw new Error('Invalid location.');
    // defaultLocation = value;
    // }
  });

  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
}
const circle = new Circle(10);
// console.log(circle.defaultLocation);
// newLocation = {
//     x: 1,
//     y: 2
// }
circle.defaultLocation = 1; // can't change it Read-only! if only get in defineProperty
// console.log(circle.defaultLocation);

delete circle.defaultLocation;
console.log(circle.defaultLocation);
