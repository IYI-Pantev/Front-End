function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} length at least ${length}.`);
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User3 {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

const user3 = new User3("123");
