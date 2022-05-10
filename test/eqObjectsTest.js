const _ = require('../index');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('will return true if both objs are same', () => {
    // const ab = {a: '1', b: '2'};
    // const ba = {b: '2', a: '1'};
    // assertEqual(eqObjects(ab, ba), true); // => true

    // const abc = {a: '1', b: '2', c: '3'};
    // assertEqual(eqObjects(ab, abc), false); // => false

    // const cd = {c: '1', d: ['2', 3], a: {g: {h: 123}}};
    // const dc = {d: ['2', 3], c: '1', a: {g: {h: 123}}};

    const cd3 = {c: '1', d: ['2', 3], a: {g: {h: 123, i: [5, 4, 3, 2, 1]}}};
    const dc4 = {d: ['2', 3], c: '1', a: {g: {h: 123, i: [5, 4, 3, 2, 1]}}};

    // const cd5 = {c: '1', d: ['2', 3], a: {g: {h: 123, i: [5, 4, 3, 2, '1']}}};
    // const dc6 = {d: ['2', 3], c: '1', a: {g: {h: 123, i: [5, 4, 3, 2, 1]}}};
    // assertEqual(eqObjects(cd3, dc4), true); // => true

    // const cd2 = {c: '1', d: ['2', 3, 4]};
    // assertEqual(eqObjects(cd, cd2), false); // => false

    assert.equal(_.eqObjects(cd3, dc4), true);
  });
  // assertArraysEqual(letterPositions('hello').e, [1]);
});
