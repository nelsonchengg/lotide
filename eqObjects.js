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

const eqObjects = function(object1, object2) {
  const object1List = Object.keys(object1);
  const object2List = Object.keys(object2);
  if (object1List.length !== object2List.length) {
    return false;
  }
  for (const key of object1List) {
    if (object2List.includes(key) === false) {
      return false;
    }
  }
  for (const key of object2List) {
    if (object1List.includes(key) === false) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));