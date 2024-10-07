class Motorcycle {
  constructor(public name: string) {}
  drive(): void {
    console.log(`${this.name} is speeding`);
  }
}

class Car extends Motorcycle {
  constructor(override name: string) {
    super(name);
  }
  override drive(): void {
    console.log(`${this.name} is driving very fast`);
  }
}

const car = new Car("bmw_X5");
car.drive();
