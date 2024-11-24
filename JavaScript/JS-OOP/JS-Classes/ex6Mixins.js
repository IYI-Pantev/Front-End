const Drivable = {
  drive() {
    console.log("Driving...");
  },
};

const Flyable = {
  fly() {
    console.log("Flying...");
  },
};

class FlyingCar {
  constructor(brand) {
    this.brand = brand;
  }
}

// Apply multiple inheritance via mixins
Object.assign(FlyingCar.prototype, Drivable, Flyable);

const flyingCar = new FlyingCar("SkyCar");
flyingCar.drive(); // Output: Driving...
flyingCar.fly(); // Output: Flying...
