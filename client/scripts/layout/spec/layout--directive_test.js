'use strict';

var chai = require('chai'),
    expect = chai.expect;

require('../index.js');

describe('first test', function () {
    var controller;

    beforeEach(angular.mock.module('layout'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {

        controller = $controller('layoutController');
    }));

    it('first actual test', function () {

        expect(controller.title).to.equal('layout controller');
    });
});
