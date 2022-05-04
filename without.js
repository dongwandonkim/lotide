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

const without = (arr1, arr2) => {
  let source = [...arr1];

  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if (source[i] === arr2[y]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); //) => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);
console.log(assertArraysEqual(words, ['hello', 'world', 'lighthouse']));
