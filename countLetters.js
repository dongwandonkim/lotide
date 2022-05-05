const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let result = {};

  for (let letter of str) {
    if (letter === ' ') continue;
    Object.prototype.hasOwnProperty.call(result, letter)
      ? (result[letter] += 1)
      : (result[letter] = 1);
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));
