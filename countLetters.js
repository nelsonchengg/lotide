const assertEqual = function(actual, expected) {
  let statement = "";
  if (actual === expected) {
    statement = `Assertion Passed:  ${actual} === ${expected}`;
  }
  if (actual !== expected) {
    statement = `Assertion Failed:  ${actual} !== ${expected}`;
  }
  return statement;
};

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

console.log(countLetters("Lighthouse in the house"));