const takeUntil = function(array, callback) {
  const result = [];
  for (let value of array) {
    if (callback(value)) {
      return result;
    }
    result.push(value);
  }
  return result;
};

module.exports = takeUntil;