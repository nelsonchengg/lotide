const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);
console.log(results2);

const results3 = map(words, word => word[2]);
console.log(results3);

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]));
console.log(assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ]));