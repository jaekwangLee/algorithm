function solution() {
  const answer = [];
  const constructors = [];
  for (let i = 1; i <= 10000; i++) {
    let sum = i;
    sum += i
      .toString()
      .split("")
      .reduce((prev, val) => prev + Number(val), 0);

    constructors.push(sum);
  }

  for (let i = 1; i <= 10000; i++) {
    if (!constructors.some((val) => val === i)) {
      console.log(i);
    }
  }
}

console.log(solution());
