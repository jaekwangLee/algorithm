const fs = require("fs");
const [nk, ...rest] = fs.readFileSync("/dev/stdin").toString().split("\n");

const coinTypes = rest.map((coin) => Number(coin)).reverse();
let money = Number(nk.split(" ")[1]);
let usageCoins = 0;

for (let i = 0; i < coinTypes.length; i++) {
  const coin = coinTypes[i];
  const quot = money / coin;
  const remainder = money % coin;

  if (quot < 1) {
    continue;
  }

  usageCoins += Math.floor(quot);
  money = remainder;

  if (remainder === 0) {
    break;
  }
}

console.log(usageCoins);
