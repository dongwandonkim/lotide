// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  if (arr.length <= 1) return [];

  const tails = arr.slice(1);
  console.log(tails, arr);
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
