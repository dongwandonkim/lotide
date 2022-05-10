const _ = require('../index');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('It should scan the object and return the first key which contains the given value.', () => {
    const expect = 'drama';
    const bestTVShowsByGenre = {
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };

    assert.equal(_.findKeyByValue(bestTVShowsByGenre, 'The Wire'), expect);
  });
  it('It should return undefined when value is not exist', () => {
    const expect = 'drama';
    const bestTVShowsByGenre = {
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };

    assert.equal(_.findKeyByValue(bestTVShowsByGenre, 'The Wire'), expect);
  });
});
