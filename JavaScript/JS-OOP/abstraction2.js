function Circle(radius) {
  this.radius = radius;

  // private property
  let defaultLocation = { x: 0, y: 1 };

  // private method
  let computeOptimumLocation = function (factor) {};

  this.draw = function () {
    computeOptimumLocation(0.33);

    console.log("draw");
  };
  //  1 first argument is the object we want to
  // define property access
  // 2 - name of the property in string " "
  // 3 - object
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      // but we can't make to accessed by a password
      // get and set methods are needed
      return defaultLocation;
    },
    set: function (value) {
      if (typeof value !== "object")
        throw new Error(" enter object with {x: , y: } values.");
      if (!value.x || !value.y) throw new Error("x and y value needed");
    },
  });
}

const circle = new Circle(10);
// circle.defaultLocation = { x: 1 };
console.log(circle.defaultLocation);
