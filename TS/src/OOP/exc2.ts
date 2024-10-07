class Person1 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee1 extends Person1 {
  constructor(firstName: string, lastName: string, private _salary: number) {
    super(firstName, lastName);
  }

  get fullInfo(): string {
    return this.fullName + " " + `salary: ${this._salary}`;
  }
}

const emp = new Employee1("David", "Erikson", 4700);
console.log(emp.fullInfo);
