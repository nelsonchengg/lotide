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

const without = function(array1, array2) {
  let newSet = [];
  for (let i = 0; i < array1.length; i++) {
    let set1 = array1[i];
    if (array2.includes(set1) === false) {
      newSet.push(set1);
    }
  }
  return newSet;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));