// 단일 연결 리스트 연습
class Queue {
  head = null;
  tail = null;
  size = 0;

  createNode(value) {
    return {
      value,
      next: null,
      prev: null,
    };
  }

  push(value) {
    const newNode = this.createNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size += 1;
  }

  pop() {
    if (this.size === 0) {
      return -1;
    } else {
      const currentValue = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return currentValue;
    }
  }

  size() {
    return this.size;
  }

  empty() {
    if (this.size > 0) {
      return 0;
    } else {
      return 1;
    }
  }

  front() {
    if (this.size > 0) {
      const currentValue = this.head.value;
      return currentValue;
    } else {
      return -1;
    }
  }

  back() {
    if (this.size > 0) {
      const tailValue = this.tail.value;
      return tailValue;
    } else {
      return -1;
    }
  }
}
