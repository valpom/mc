'use strict';

angular.module('mcApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


