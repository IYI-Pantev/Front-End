const person = {
  firstName: "Elon",
  lastName: "Trump",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string")
      throw new Error("First and Last names needed.");
    parts = value.split(" ");
    if (parts.length !== 2)
      throw new Error("First and Last names needed.\nBut only one given.");
    const [first, last] = parts;
    this.firstName = first;
    this.lastName = last;
  },
};

// getters => access properties
// setters => change (mutate) them
person.fullName = "James Brown";
// can check and show errors with
// try {}
// and catch (x){}

console.log(person);
