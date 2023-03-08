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

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));