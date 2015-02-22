'use strict';

angular.module('mcApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
