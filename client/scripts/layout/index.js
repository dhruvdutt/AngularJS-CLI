var ngModule = angular.module('layout', []);

require('./layout--directive.js')(ngModule);

require('./templates')(ngModule);

module.export = ngModule;
