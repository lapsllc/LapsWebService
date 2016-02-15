'use strict';

angular.module('lapsExpressWebServiceApp.auth', [
  'lapsExpressWebServiceApp.constants',
  'lapsExpressWebServiceApp.util',
  'ngCookies',
  'ngRoute'
])
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
