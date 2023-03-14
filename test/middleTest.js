const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([2, 7, 9, 7, 4, 6, 7, 9])); // = > [7, 4]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));