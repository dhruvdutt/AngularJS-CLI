'use strict';

/* eslint import/no-extraneous-dependencies: 0 */

var chai = require('chai');

var expect = chai.expect;

require('../index.js');

describe('first test', () => {
    var controller;

    beforeEach(angular.mock.module('layout'));
    beforeEach(angular.mock.inject(($rootScope, $controller) => {
        controller = $controller('layoutController');
    }));

    it('first actual test', () => {
        expect(controller.title).to.equal('layout controller');
    });
});
