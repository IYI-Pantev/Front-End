class Person {
  constructor(public fname: string, public lname: string) {}
  get fullName() {
    return this.fname + " " + this.lname;
  }
  walk(): void {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(
    public readonly id: number,
    public override fname: string,
    public override lname: string
  ) {
    super(fname, lname);
  }

  takeTest(): void {
    console.log("taking a Test");
  }
}

class Professor extends Person {
  override get fullName() {
    return "Professor" + " " + super.fullName;
  }
}
let teacher1 = new Professor("Nikola", "Tesla");
console.log(teacher1.fullName);
