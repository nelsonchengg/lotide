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

module.exports = assertEqual;