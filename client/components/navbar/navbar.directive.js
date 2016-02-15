'use strict';

angular.module('lapsExpressWebServiceApp')
.directive('navbar', () => ({
  templateUrl: 'components/navbar/navbar.html',
  restrict: 'E',
  controller: 'NavbarController',
  controllerAs: 'nav'
}));
