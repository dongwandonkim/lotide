const assert = require('chai').assert;
const _ = require('../index');

describe('#Tail', () => {
  it('returns [2,3] for [1, 2, 3]', () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(_.tail(['5']), []);
  });
});
