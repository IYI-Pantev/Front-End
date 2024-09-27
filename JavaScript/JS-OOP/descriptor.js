let person = { name: "Mosh" };

Object.defineProperty(person, "name", {
  //data descriptors
  writable: false, // can't change name Read-Only
  enumerable: false, // won't show in Object.keys()
  configurable: false, // can't Delete the property
  // access descriptors
  //get: function() {return}
  //set: function(value) {return}
});

person.name = "John";
console.log(person);
console.log(Object.keys(person));
delete person.name;
console.log(person);

// for (let key in person)
//     console.log(key);

// objectBase = Object.getPrototypeOf(person);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);
