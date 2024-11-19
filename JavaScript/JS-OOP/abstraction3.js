class AbstractionJS {
  // private property
  #count = 0;

  increment() {
    this.#count++;
  }

  decrement() {
    if (this.#count > 0) this.#count--;
  }

  getCount() {
    return this.#count;
  }
}
const count = new AbstractionJS();
count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
console.log(count.getCount());
