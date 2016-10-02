'use strict';

describe('first test', function () {
    it('first actual test', function () {
        expect('hello').to.equal('hello');
    });

    it('this is failing for now', function () {
        expect('test').to.equal('hello');
    });
});
