'use strict';

angular.module('lapsExpressWebServiceApp')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  });
});
