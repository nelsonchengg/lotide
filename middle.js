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

const middle = function(numbers) {
  const result = [];
  const length = numbers.length;
  if (length <= 2) {
    return result;
  }
  if (length % 2 === 0) {
    let index1 = (length / 2) - 1;
    let index2 = length / 2;
    result.push(numbers[index1], numbers[index2]);
  }
  if (length % 2 !== 0) {
    let index = Math.floor(length / 2);
    result.push(numbers[index]);
  }
  return result;
};

module.exports = middle;