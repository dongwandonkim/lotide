const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);

  if (objOneKeys.length !== objTwoKeys.length) return false;

  for (let key of objOneKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (
      typeof object1[key] === 'object' &&
      typeof object2[key] === 'object'
    ) {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;
