function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
  //Prototype members
  Circle.prototype.draw = function () {
    console.log("draw");
  };
}

const c1 = new Circle(1);
const c2 = new Circle(2);

// Returns only instance(own) members
console.log(Object.keys(c1));

// Returns all members (instance and prototype)
for (key in c1) console.log(key);

// check for where property is stored(is it own)
console.log(c2.hasOwnProperty("draw"));
