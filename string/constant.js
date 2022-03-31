const fs = require("fs");
const [word1, word2] = fs.readFileSync("/dev/stdin").toString().split(" ");

const wordReverse = (word) => {
  let newWord = "";
  const wordLen = word.length;
  for (let i = wordLen; i > 0; i--) {
    newWord += word[i - 1];
  }

  return newWord;
};

const reversedWord1 = parseInt(wordReverse(word1), 10);
const reversedWord2 = parseInt(wordReverse(word2), 10);

console.log(reversedWord1 > reversedWord2 ? reversedWord1 : reversedWord2);
