const assertEqual = require('./assertEqual');

const head = function(array) {
  let value = "";
  value = array[0];
  return value;
};

module.exports = head;