const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `Assertion Passed: ${array1} === ${array2}`;
  }
  if (eqArrays(array1, array2) === false) {
    return `Assertion Failed: ${array1} !== ${array2}`;
  }
};

module.exports = assertArraysEqual;