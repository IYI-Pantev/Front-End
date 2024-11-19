function Person(name, years, email) {
  this.name = name;
  this.years = years;
  this.email = email;
  this.fullInfo = function () {
    return `${this.name}, ${this.years} years of age. Email ${this.email}`;
  };
}

const p = new Person("Jack", 29, "jackwhite@gmail,com");

const properties = Object.keys(p).filter((key) => typeof p[key] !== "function");
console.log(properties);

const values = [];
properties.forEach((key) => values.push(p[key]));
console.log(values);

// console.log(Object.values(p));
