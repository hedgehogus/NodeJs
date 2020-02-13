const assert = require('assert');

describe('Array#indexOf()', () => {
    it('need to return -1 if no this element in array', () => {
        assert.equal(-1, [1,2,3].indexOf(4));
    });
});