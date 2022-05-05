const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
