const fs = require("fs");
const rows = fs.readFileSync("/dev/stdin").toString().split("\n");

function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  };
}

// 단일 연결 리스트
function Queue() {
  this.head;
  this.tail;
  this.size = 0;

  this.push = (value) => {
    const currentNode = createNode(value);
    if (this.head == null) {
      this.head = currentNode;
    } else {
      this.tail.next = currentNode;
      currentNode.prev = this.tail;
    }

    this.tail = currentNode;
    this.size += 1;
  };

  this.pop = () => {
    if (this.size === 0) {
      return -1;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return value;
    }
  };

  this.length = () => {
    return this.size;
  };

  this.front = () => {
    return this.size === 0 ? -1 : this.head.value;
  };

  this.back = () => {
    return this.size === 0 ? -1 : this.tail.value;
  };

  this.empty = () => {
    return this.size === 0 ? 1 : 0;
  };
}

function main(commands) {
  const queue = new Queue();
  const parsedCommands = commands.map((v) => v.split(" "));
  let results = "";
  parsedCommands.forEach((comm) => {
    switch (comm[0]) {
      case "push":
        queue.push(comm[1]);
        break;
      case "pop":
        results += `${queue.pop()}\n`;
        break;
      case "front":
        results += `${queue.front()}\n`;
        break;
      case "back":
        results += `${queue.back()}\n`;
        break;
      case "size":
        results += `${queue.length()}\n`;
        break;
      case "empty":
        results += `${queue.empty()}\n`;
        break;
    }
  });

  console.log(results);
}

main(rows.slice(1));
