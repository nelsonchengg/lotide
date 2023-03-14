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

module.exports = findKeyByValue;