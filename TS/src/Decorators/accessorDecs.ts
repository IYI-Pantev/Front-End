function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // descriptor.value doesn't work for getters and setters
  const original = descriptor.get;
  // getters cannot have any arguments
  descriptor.get = function () {
    const result = original?.call(this);
    if (typeof result === "string") {
      return result.toLocaleUpperCase();
    }
    return result;
  };
}

class P {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new P("John", "Wick");
console.log(person.fullName);
