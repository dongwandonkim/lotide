const middle = (arr) => {
  let result = [...arr];
  if (arr.length === 1 || arr.length === 2) return [];

  const middle = Math.floor(arr.length / 2);
  // console.log(middle);
  if (arr.length % 2 === 0) {
    return result.slice(middle - 1, middle + 1);
  }
  return [result[middle]];
};

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;
