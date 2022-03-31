const fs = require("fs");
const rows = fs.readFileSync("/dev/stdin").toString().split("\n");
const queries = rows.slice(1);
// const rows = [
//   "push_back 1",
//   "push_front 2",
//   "front",
//   "back",
//   "size",
//   "empty",
//   "pop_front",
//   "pop_back",
//   "pop_front",
//   "size",
//   "empty",
//   "pop_back",
//   "push_front 3",
//   "empty",
//   "front",
// ];
// const rows = [
//   "front",
//   "back",
//   "pop_front",
//   "pop_back",
//   "push_front 1",
//   "front",
//   "pop_back",
//   "push_back 2",
//   "back",
//   "pop_front",
//   "push_front 10",
//   "push_front 333",
//   "front",
//   "back",
//   "pop_back",
//   "pop_back",
//   "push_back 20",
//   "push_back 1234",
//   "front",
//   "back",
//   "pop_back",
//   "pop_back",
// ];

class Deque {
  head = null;
  tail = null;
  _size = 0;

  print() {
    console.log("head: ", this.head);
    console.log("tail: ", this.tail);
    console.log("size: ", this._size);
  }

  createNode(value) {
    return {
      value,
      next: null,
      prev: null,
    };
  }

  pushFront(value) {
    const newNode = this.createNode(value);
    if (this._size === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this._size += 1;
  }

  pushBack(value) {
    const newNode = this.createNode(value);
    if (this._size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this._size += 1;
  }

  popFront() {
    if (this._size === 0) {
      return -1;
    } else if (this._size === 1) {
      const currentValue = this.head.value;
      this.head = null;
      this.tail = null;
      this._size -= 1;
      return currentValue;
    } else if (this._size === 2) {
      const currentValue = this.head.value;
      this.head = this.head.next;
      this.tail.prev = null;
      this._size -= 1;
      return currentValue;
    } else {
      const currentValue = this.head.value;
      this.head.next.prev = null; // 중요
      this.head = this.head.next;
      this._size -= 1;
      return currentValue;
    }
  }

  popBack() {
    if (this._size === 0) {
      return -1;
    } else if (this._size === 1) {
      const currentValue = this.tail.value;
      this.head = null;
      this.tail = null;
      this._size -= 1;
      return currentValue;
    } else if (this._size === 2) {
      const currentValue = this.tail.value;
      this.tail = this.tail.prev;
      this.head.next = null;
      this._size -= 1;
      return currentValue;
    } else {
      const currentValue = this.tail.value;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this._size -= 1;
      return currentValue;
    }
  }

  size() {
    return this._size;
  }

  empty() {
    if (this._size === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this._size === 0) {
      return -1;
    } else {
      const currentValue = this.head.value;
      return currentValue;
    }
  }

  back() {
    if (this._size === 0) {
      return -1;
    } else {
      const lastValue = this.tail.value;
      return lastValue;
    }
  }
}

function decquePrinter(sentences) {
  const deque = new Deque();
  let results = "";

  sentences.forEach((sentence) => {
    const isPushFront = sentence.indexOf("push_front") >= 0;
    const isPushBack = sentence.indexOf("push_back") >= 0;
    let condition = sentence;

    if (isPushFront) condition = "push_front";
    if (isPushBack) condition = "push_back";

    switch (condition) {
      case "push_front":
        const frontValue = Number(sentence.split(" ")[1]);
        deque.pushFront(frontValue);
        break;
      case "push_back":
        const backValue = Number(sentence.split(" ")[1]);
        deque.pushBack(backValue);
        break;
      case "pop_front":
        results += `${deque.popFront()}\n`;
        break;
      case "pop_back":
        results += `${deque.popBack()}\n`;
        break;
      case "front":
        results += `${deque.front()}\n`;
        break;
      case "back":
        results += `${deque.back()}\n`;
        break;
      case "size":
        results += `${deque.size()}\n`;
        break;
      case "empty":
        results += `${deque.empty()}\n`;
        break;
    }
  });

  console.log(results);
}

decquePrinter(queries);
