const fs = require("fs");
// const rows = fs.readFileSync("/dev/stdin").toString().split("\n");
const rows = [
  //   14,
  //   "push 1",
  //   "push 2",
  //   "top",
  //   "size",
  //   "empty",
  //   "pop",
  //   "pop",
  //   "pop",
  //   "size",
  //   "empty",
  //   "pop",
  //   "push 3",
  //   "empty",
  //   "top",

  7,
  "pop",
  "top",
  "push 123",
  "top",
  "pop",
  "top",
  "pop",
];

function List() {
  this.arr = [];
  this.history = [];

  this.push = (x) => {
    this.arr.push(x);
  };

  this.pop = () => {
    if (this.arr.length === 0) {
      this.history.push(-1);
    } else {
      const value = this.arr.pop();
      this.history.push(value);
    }
  };

  this.size = () => {
    this.history.push(this.arr.length);
  };

  this.empty = () => {
    this.history.push(this.arr.length === 0 ? 1 : 0);
  };

  this.top = () => {
    if (this.arr.length === 0) {
      this.history.push(-1);
    } else {
      this.history.push(this.arr[this.arr.length - 1]);
    }
  };
}

const orderCnt = rows[0];
const orders = rows.slice(1).map((row) => {
  const values = row.split(" ");
  return {
    action: values[0],
    value: values.length > 1 ? values[1] : null,
  };
});

const list = new List();
for (let i = 0; i < orderCnt; i++) {
  const order = orders[i];
  if (order.value) list[order.action](order.value);
  else list[order.action]();
}

console.log(list.history.join("\n"));
