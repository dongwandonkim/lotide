const _ = require('../index');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('will return flatten array when you pass in any arr / nested arr', () => {
    const nested = [1, [2, [3, 4]], 5, [6]];

    assert.deepEqual(_.flatten(nested), [1, 2, 3, 4, 5, 6]);
  });
});
