const _ = require('../index');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it('counts for a specific subset of those items.', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe',
    ];
    const result1 = _.countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    assert.equal(result1['Jason'], 1);
  });
});

// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);
