const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim();

function main() {
  //   const numbers = [4, -1, 2, 1, 3, 0, 0, -2, 5];
  const numbers = inputs.split("\n").map((n) => parseInt(n, 10));
  numbers.sort((a, b) => (a > b ? -1 : 1));

  //   console.log(numbers);
  // 양수는 큰수끼리 먼저 묶기
  // 양수가 1개 미만이면 덧셈처리
  // 음수가 두개 이상이면 큰 음수끼리 곱하고,
  // 0은 음수 중 제일 큰것과 곱해야하고, 음수가 없으면 덧셈처리
  // 음수가 미만이면 덧셈 처리
  const pNumbers = numbers.filter((n) => n > 0);
  const nNumbers = numbers.filter((n) => n < 0);
  const zNumbers = numbers.filter((n) => n === 0);

  const pSum = maxPositiveNumber(pNumbers);
  const nSum = maxNegativeNumber(nNumbers, zNumbers);
  //   console.log(pSum, nSum);
  console.log(pSum + nSum);
}

function maxPositiveNumber(nums) {
  const pos = [];
  for (let i = 0; i <= nums.length; i += 2) {
    if (i + 1 < nums.length) {
      pos.push(nums[i] * nums[i + 1]);
    } else {
      if (nums[i]) pos.push(nums[i]);
    }
  }

  return pos.reduce((prev, val) => prev + val, 0);
}

function maxNegativeNumber(mNums, zNums) {
  if (mNums.length === 0) {
    return 0;
  } else {
    let i = 0;
    let max = 0;
    while (i <= mNums.length) {
      if (mNums[i + 1]) {
        max += mNums[i] * mNums[i + 1];
      } else {
        max += zNums.length > 0 ? 0 : mNums[i];
      }

      i += 2;
    }

    return max;
  }
}

main();
