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

const findKeyByValue = function(searchThis, forThis) {
  let foundIt = null;
  for (const key in searchThis) {
    if (searchThis[key] === forThis) {
      foundIt = key;
    } else {
      foundIt = undefined;
    }
  }
  return foundIt;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));