let person = {name: 'Mosh'};

Object.defineProperty(person, 'name', {
    //data descriptors
    writable: false,
    enumerable: false,
    configurable: false
    // access descriptors
    //get: function() {return}
    //set: function(value) {return}
});

person.name = 'John';
console.log(person);
console.log(Object.keys(person));
delete person.name;
console.log(person);


// for (let key in person)
//     console.log(key);

// objectBase = Object.getPrototypeOf(person);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);