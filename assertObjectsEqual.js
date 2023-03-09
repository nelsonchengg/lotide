const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (Array.isArray(val1)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
      continue;
    }

    if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
console.log(assertObjectsEqual(shirtObject, anotherShirtObject));

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertObjectsEqual(shirtObject, longSleeveShirtObject)); // => false
