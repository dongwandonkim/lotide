const countOnly = function (allItems, itemsToCount) {
  let obj = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      Object.prototype.hasOwnProperty.call(obj, item)
        ? (obj[item] += 1)
        : (obj[item] = 1);
    }
  }
  return obj;
};

module.exports = countOnly;
