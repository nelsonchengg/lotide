const { count } = require("console");

const countLetters = function(sentence) {
  const count = {};
  const convertedSentence = sentence.toLowerCase();
  for (const letters of convertedSentence) {
    if (letters === " ") {
      continue;
    }
    if (count[letters]) {
      count[letters] += 1;
    } else {
      count[letters] = 1;
    }
  }
  return count;
};

module.exports = countLetters;