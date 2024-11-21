let person = { name: "John", age: 29 };

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

person.name = "Magdalena";
// console.log(person.name); //--> John

console.log(Object.keys(person));
for (key in person) {
  console.log(key, person[key]); // --> no output
}

let personAgeDescriptor = Object.getOwnPropertyDescriptor(person, "age");
console.log(personAgeDescriptor);
