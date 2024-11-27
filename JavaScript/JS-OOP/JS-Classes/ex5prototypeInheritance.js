function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function () {
  console.log(`${this.type} is starting`);
};

function Car(type, brand) {
  Vehicle.call(this, type); // Call parent constructor
  this.brand = brand;
}

// Inherit methods from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Override the start method
Car.prototype.start = function () {
  Vehicle.prototype.start.call(this); // Call parent method
  console.log(`${this.brand} is ready to go!`);
};

const car = new Car("Car", "Toyota");
car.start();
// Output:
// Car is starting
// Toyota is ready to go!
