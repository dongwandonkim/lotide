// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // console.log(arr1[i], arr2[i]);
      return eqArrays(arr1[i], arr2[i]);
    }
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const nested = [1, [2, 5, [6, 7]], 3];
const nested2 = [1, [2, 5, [6, 7]], 3];
console.log(eqArrays(nested, nested2)); // => true
// // console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// // console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
// // console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
