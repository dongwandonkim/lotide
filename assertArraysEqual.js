const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  const result = eqArrays(arr1, arr2);

  result
    ? console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, '3']);
