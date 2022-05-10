const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const assert = require('chai').assert;

describe('#middle', () => {
  it('returns middle values from the passed in Array', () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = [3];
    assert.deepEqual(middle(actual), expected);
  });
});
