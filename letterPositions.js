const letterPositions = function (sentence) {
  const results = {};

  for (let i in sentence) {
    if (sentence[i] === ' ') continue;

    Object.prototype.hasOwnProperty.call(results, sentence[i])
      ? results[sentence[i]].push(parseInt(i))
      : (results[sentence[i]] = [parseInt(i)]);
  }
  return results;
};

const assertArraysEqual = (arr1, arr2) => {
  const result = eqArrays(arr1, arr2);

  result
    ? console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('hello').e, [1]);
