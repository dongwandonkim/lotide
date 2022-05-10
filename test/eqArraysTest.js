const _ = require('../index');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('will return true if both arrays are same', () => {
    const nested = [1, [2, 5, [6, 7]], 3];
    const nested2 = [1, [2, 5, [6, 7]], 3];

    assert.equal(_.eqArrays(nested, nested2), true);
  });
});

// assertEqual(eqArrays(nested, nested2), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
