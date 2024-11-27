// Class-Based inheritance ES6+

// Parent class
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`${this.type} is starting`);
  }
}

// Child class
class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // Call parent class constructor
    this.brand = brand;
  }

  start() {
    super.start(); // Call parent method
    console.log(`${this.brand} is ready to go!`);
  }
}

const car = new Car("Car", "Toyota");
car.start();
// Output:
// Car is starting
// Toyota is ready to go!

// Prototype-Based inheritance
