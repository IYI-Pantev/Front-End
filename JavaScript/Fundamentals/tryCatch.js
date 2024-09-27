const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("name must be given");

    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("first and last names needed");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  //   person.fullName = null;
  person.fullName = "";
} catch (e) {
  console.log(e);
}

console.log(person);
