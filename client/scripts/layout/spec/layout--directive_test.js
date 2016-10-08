'use strict';

module.exports = function layoutDirectiveTest(ngModule) {
    ngModule.directive('layout', function layout() {
        return {
            restrict: 'E',
            replace: true,
            controller: 'layoutController',
            controllerAs: 'layoutCtrl',
            bindToController: true,
            templateUrl: '/templates/layout/layout.html',
            scope: {},
        };
    });

    ngModule.controller('layoutController', function layoutController() {
        var self = this;

        self.title = 'layout controller';
    });
};
