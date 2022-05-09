const assertEqual = require('./assertEqual');

const head = (arr) => {
  // if (!arr.length) return undefined;
  return arr[0];
};
// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), 5);
