const _ = require('../index');
const assert = require('chai').assert;

describe('#letterPosition', () => {
  it('will return all the indices (zero-based positions) in the string where each character is found.', () => {
    const actual = 'abcdefg';
    const expect = 4;

    assert.equal(_.letterPositions(actual).e, expect);
  });
  // assertArraysEqual(letterPositions('hello').e, [1]);
});
