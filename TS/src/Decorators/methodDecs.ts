//three params - the object, method, descriptor
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Persona {
  @Log
  say(message: string): void {
    console.log("vip says " + message);
  }
}

const p = new Persona();
p.say("Blue Sky");
