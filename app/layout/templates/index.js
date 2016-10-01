'use strict';

module.exports = function (ngModule) {
    ngModule.run([
        '$templateCache',
        function ($templateCache) {
            $templateCache.put('/templates/layout/layout.html',
                require('./layout.tpl.html'));
        }
    ]);
};
