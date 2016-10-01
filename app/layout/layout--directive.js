'use strict';

module.exports = function (ngModule) {

    ngModule.directive('layout', function () {
        return {
            restrict: 'E',
            replace: true,
            controller: 'layoutController',
            controllerAs: 'layoutCtrl',
            bindToController: true,
            templateUrl: '/templates/layout/layout.html',
            scope: {}
        };
    });

    ngModule.controller('layoutController', function () {
        var self = this;

        self.title = 'Hell Yeah';
    });
};
