const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 3]), true));