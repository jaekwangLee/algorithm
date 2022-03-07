const fs = require("fs");
// const values = fs.readFileSync("/dev/stdin").toString().split("\n");
const values = ["dnlsdfsdnfi33n3sdidfn3n2n3nsdnen3n3", "n3"];

function getNoBombSentence(sentence, keyword) {
  let stack = [];
  let currentSentence = sentence;
  for (let i = 0; i < sentence.length; i++) {
    if (i > 0 && stack.length === 0) {
      break;
    }

    let bombedSetence = i === 0 ? currentSentence : stack.join("");
    const index = bombedSetence.indexOf(keyword);
    if (index < 0) {
      break;
    } else {
      stack = [];
    }

    for (let j = 0; j < currentSentence.length; j++) {
      const index = bombedSetence.indexOf(keyword);
      if (index < 0) {
        stack.push(bombedSetence);
        break;
      } else {
        stack.push(bombedSetence.slice(0, index));
        bombedSetence = bombedSetence.slice(index + keyword.length);
      }
    }
  }

  const bombedResultSentence = stack.join("");
  console.log(bombedResultSentence ? bombedResultSentence : "");
}

getNoBombSentence(values[0], values[1]);
