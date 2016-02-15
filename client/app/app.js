'use strict';

angular.module('lapsExpressWebServiceApp', [
  'lapsExpressWebServiceApp.auth',
  'lapsExpressWebServiceApp.admin',
  'lapsExpressWebServiceApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
