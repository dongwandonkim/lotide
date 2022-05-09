const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const nested = [1, [2, 5, [6, 7]], 3];
const nested2 = [1, [2, 5, [6, 7]], 3];
assertEqual(eqArrays(nested, nested2), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
