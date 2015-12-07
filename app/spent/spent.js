'use strict';

angular.module('myApp.spent', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spent', {
    templateUrl: 'spent/spent.html',
    controller: 'SpentCtrl'
  });
}])

.controller('SpentCtrl', [function() {

}]);
