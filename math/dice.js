const fs = require("fs");
// const rows = fs.readFileSync("/dev/stdin").toString().split("\n");
// const N = Number(rows[0]);
// const ABCDEF = rows[1].split(' ').map((str) => Number(str));

const N = 3;
const ABCDEF = [1, 2, 3, 4, 5, 6];
// const ABCDEF = [50, 50, 50, 50, 50, 50];

const getMinNumber = (numbers) => {
  const newNumbers = numbers.map((num) => num);
  newNumbers.sort((a, b) => (a > b ? 1 : -1));
  return newNumbers[0];
};

const getMinTwoNumbers = (numbers) => {
  const { afMin, beMin, cdMin } = getMinCombination(numbers);

  const afcd = afMin + cdMin;
  const becd = beMin + cdMin;
  const afbe = afMin + beMin;

  const compareAfcdWithBecd = afcd < becd ? afcd : becd;
  const compareAfbeWithBigger =
    afbe < compareAfcdWithBecd ? afbe : compareAfcdWithBecd;

  return compareAfbeWithBigger;
};

const getMinThreeNumbers = (numbers) => {
  const { afMin, beMin, cdMin } = getMinCombination(numbers);
  return afMin + beMin + cdMin;
};

const getMinCombination = (numbers) => {
  const afMin = numbers[0] < numbers[5] ? numbers[0] : numbers[5];
  const beMin = numbers[1] < numbers[4] ? numbers[1] : numbers[4];
  const cdMin = numbers[2] < numbers[3] ? numbers[2] : numbers[3];

  return { afMin, beMin, cdMin };
};

const getSumOneFace = (P, minNumber) => {
  return minNumber * (4 * (P - 1) * (P - 2) + (P - 2) * (P - 2));
};

const getSumTwoFace = (P, minTwoNumbers) => {
  return minTwoNumbers * (4 * (P - 1) + 4 * (P - 2));
};

const getSumThreeFace = (minThreeNumbers) => {
  return minThreeNumbers * 4;
};

const sumSmallFiveSpace = (numbers) => {
  const newNumbers = numbers.map((num) => num);
  newNumbers.sort((a, b) => (a < b ? -1 : 1));
  const sum = newNumbers.slice(0, 5).reduce((prev, val) => prev + val, 0);
  return sum;
};

if (N === 1) {
  const sum = sumSmallFiveSpace(ABCDEF);
  console.log(sum);
} else {
  const noCombinedMinNumber = getMinNumber(ABCDEF);
  const twoCombinedMinNumber = getMinTwoNumbers(ABCDEF);
  const threeCombinedMinNumber = getMinThreeNumbers(ABCDEF);

  const oneFaceSummary = getSumOneFace(N, noCombinedMinNumber);
  const twoFaceSummary = getSumTwoFace(N, twoCombinedMinNumber);
  const threeFaceSummary = getSumThreeFace(threeCombinedMinNumber);
  const sum = oneFaceSummary + twoFaceSummary + threeFaceSummary;
  console.log(ABCDEF);
  console.log(sum);
}
