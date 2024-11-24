const _showCourtRecord = new WeakMap();

class Person {
  #id;
  #password;

  constructor(name, years, pass) {
    this.name = name;
    this.years = years;
    this.#id = 7476;
    this.#password = pass;
    // another way for private method
    _showCourtRecord.set(this, () => {
      return `clean court record`;
    });
  }

  #showID() {
    return `#xSm${this.#id}`;
  }

  showFullInfo(pass) {
    if (pass === this.#password) {
      return `ID: ${this.#showID()}\n${this.name}, ${
        this.years
      } years old.\n${_showCourtRecord.get(this)()}`;
    }
  }

  // another way for private method
}

const person1 = new Person("John Bane", 29, 6768);
console.log(person1.showFullInfo(6768));
