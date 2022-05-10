const flatten = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flattenNested = flatten(arr[i]);
      newArr.push(flattenNested);
      // for (let y = 0; y < arr[i].length; y++) {
      //   newArr.push(arr[i][y]);
      // }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, [2, [3, 4]], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
