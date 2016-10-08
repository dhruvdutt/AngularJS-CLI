'use strict';

// var chai = require('chai');
var module = require('./layout.tpl.html');
var layout = require('./layout.tpl.html');

module.exports = function indexFunction(ngModule) {
    ngModule.run([
        '$templateCache',
        function tp($templateCache) {
            $templateCache.put('/templates/layout/layout.html',
                layout);
        },
    ]);
};
