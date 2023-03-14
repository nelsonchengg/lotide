const findKey = function(object, callback) {
  let result = null;
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
    if (!callback(object[key])) {
      result = undefined;
    }
  }
  return result;
};

module.exports = findKey;