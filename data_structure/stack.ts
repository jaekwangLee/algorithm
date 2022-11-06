interface StackNode {
  next?: StackNode;
  value: string;
}

class Stack {
  private valueStr: StackNode = {
    next: undefined,
    value: "",
  };

  push(value: string) {
    this.valueStr = {
      next: this.valueStr,
      value,
    };
  }

  pop() {
    if (!this.valueStr || !this.valueStr.value) {
      throw new Error("no exist value");
    }
    const topValue = this.valueStr.value;
    this.valueStr = this.valueStr.next || {
      next: undefined,
      value: "",
    };
    return topValue;
  }
}

const stack = new Stack();
stack.push("123");
stack.push("456");
stack.push("789");
stack.push("012");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
