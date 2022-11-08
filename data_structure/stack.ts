type StackNode = {
  next?: StackNode;
  value: string;
};

interface Stack {
  push(value: string): void;
  pop(): string;
}

class StackImple implements Stack {
  private head: StackNode = {
    next: undefined,
    value: "",
  };

  push(value: string) {
    const node = { next: this.head, value };
    this.head = node;
  }

  pop() {
    if (!this.head || !this.head.value) {
      throw new Error("Stack is empty");
    }

    const topValue = this.head.value;
    this.head = this.head.next || {
      next: undefined,
      value: "",
    };

    return topValue;
  }
}

const stack = new StackImple();
stack.push("123");
stack.push("456");
stack.push("789");
stack.push("012");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
