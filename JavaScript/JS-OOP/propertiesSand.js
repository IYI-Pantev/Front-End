function Person() {
  this.name = "John";

  Object.defineProperty(this, "id", {
    get: function () {
      return 4567;
    },
    configurable: true,
  });
}

const p1 = new Person();
console.log(p1.id);
p1.id = 0;
console.log(p1.id);
