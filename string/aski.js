const fs = require("fs");
const values = fs.readFileSync("/dev/stdin").toString().split("\n");
const value = values[0];
console.log(value.toString().charCodeAt(0));
