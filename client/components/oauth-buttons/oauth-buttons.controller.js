'use strict';

angular.module('lapsExpressWebServiceApp')
.controller('OauthButtonsCtrl', function ($window) {
  this.loginOauth = function (provider) {
    $window.location.href = '/auth/' + provider;
  };
});
