const letterPositions = function (sentence) {
  const results = {};

  for (let i in sentence) {
    if (sentence[i] === ' ') continue;

    results[sentence[i]] = parseInt(i);
  }

  return results;
};

module.exports = letterPositions;

// console.log(letterPositions('lighthouse in the house'));
