const letterPositions = function(sentence) {
  const results = {};
  const convertedSentence = sentence.toLowerCase();
  for (let i = 0; i < convertedSentence.length; i++) {
    const letters = convertedSentence[i];
    if (letters === " ") {
      continue;
    }
    if (results[letters]) {
      results[letters].push(i);
    } else {
      results[letters] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;