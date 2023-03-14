const without = function(array1, array2) {
  let newSet = [];
  for (let i = 0; i < array1.length; i++) {
    let set1 = array1[i];
    if (array2.includes(set1) === false) {
      newSet.push(set1);
    }
  }
  return newSet;
};

module.exports = without;