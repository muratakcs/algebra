
var assert = require('assert');
var RealField = require('../index.js').Real.Field;

var R = new RealField();

describe('RealField', function () {
  it('has a zero and a one element', function() {
    assert.equal(R.getZero(),0);
    assert.equal(R.getOne(),1);
  });
  it('defines + * - / operations', function() {
    var a = -1, b = 4, c;

    c = R.add(a, b);
    assert.equal(c, a + b);

    c = R.mul(a, b);
    assert.equal(c, a * b);

    c = R.sub(a, b);
    assert.equal(c, a - b);

    c = R.div(a, b);
    assert.equal(c, a / b);
  });
});

