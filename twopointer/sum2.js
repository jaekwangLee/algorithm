const fs = require("fs");
const [row1, row2] = fs.readFileSync("./dev/stdin").toString().split("\n");

function solution(nums, goal) {
    console.log(nums, goal)
    let answer = 0;

    for (let i=0; i<nums.length; i++) {
        let sum = 0;

        for (let j=i; j<nums.length; j++) {
            sum += nums[j];

            if (sum === goal) {
                answer++;
            }
        }
    }

    console.log(answer)
}

solution(row2.trim().split(' ').map(str => Number(str)), Number(row1.trim().split(' ')[1]))