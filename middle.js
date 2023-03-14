const middle = function(numbers) {
  const result = [];
  const length = numbers.length;
  if (length <= 2) {
    return result;
  }
  if (length % 2 === 0) {
    let index1 = (length / 2) - 1;
    let index2 = length / 2;
    result.push(numbers[index1], numbers[index2]);
  }
  if (length % 2 !== 0) {
    let index = Math.floor(length / 2);
    result.push(numbers[index]);
  }
  return result;
};

module.exports = middle;