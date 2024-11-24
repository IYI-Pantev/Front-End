class Person {
  static species = "Homo Sapiens";

  constructor(name) {
    this.name = name;
  }
  static describe() {
    return `Hi I'm human`;
  }
}

console.log(Person.species);
console.log(Person.describe());
