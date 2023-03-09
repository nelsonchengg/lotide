const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    let set1 = array1[i];
    let set2 = array2[i];
    if (set1 !== set2) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `Assertion Passed: ${array1} === ${array2}`;
  }
  if (eqArrays(array1, array2) === false) {
    return `Assertion Failed: ${array1} !== ${array2}`;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const convertedSentence = sentence.toLowerCase()
  for (let i = 0; i < convertedSentence.length; i++) {
    const letters = convertedSentence[i]
    if (letters === " ") {
      continue;
    }
    if (results[letters]) {
      results[letters].push(i);
    } else {
      results[letters] = [i];
    }
  }
  return results;
};

console.log(letterPositions("Lighthouse in the house"));

console.log(assertArraysEqual(letterPositions("hello").e, [1]));