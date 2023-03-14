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

const tail = function(array) {
  let value = "";
  value = array.slice(1);
  return value;
};

module.exports = tail;