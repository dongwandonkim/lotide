const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);

  if (objOneKeys.length !== objTwoKeys.length) return false;

  for (let key of objOneKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        console.log('arrayyyy');
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      console.log('obj1', object1[key], 'obj2', object2[key]);
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);

  result
    ? console.log(
        `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🔴🔴🔴 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`
      );
};

assertObjectsEqual({a: 1, b: [2, 4], c: 123}, {b: [2, 4], a: 1, c: '123'});
