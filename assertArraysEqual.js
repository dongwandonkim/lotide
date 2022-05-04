const assertArraysEqual = (arr1, arr2) => {
  const result = eqArrays(arr1, arr2);

  return result
    ? `🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`
    : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, '3']));
