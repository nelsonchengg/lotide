const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  let statement = "";
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    statement = `Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`;
  }
  if (!eqObjects(actual, expected)) {
    statement = `Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  }
  return statement;
};

module.exports = assertObjectsEqual;