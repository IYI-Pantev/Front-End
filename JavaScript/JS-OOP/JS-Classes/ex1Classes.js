// implement Stack

const _stack = new WeakMap();
class Stack {
  constructor() {
    _stack.set(this, []);
  }
  push(value) {
    let stack_current = _stack.get(this);
    stack_current.push(value);
    _stack.set(this, stack_current);
  }
  pop() {
    let stack_current = _stack.get(this);
    if (stack_current.length === 0) throw new Error("Stack is already empty");
    const value_popped = stack_current.pop();
    _stack.set(this, stack_current);
    return value_popped;
  }
  peek() {
    const stack_current = _stack.get(this);
    if (stack_current.length === 0) throw new Error("Stack is empty");
    return stack_current[stack_current.length - 1];
  }
  size() {
    return _stack.get(this).length;
  }
}
