'use strict';

var privilegeApp = angular.module('myApp.spent', ['ngRoute']);

privilegeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spent', {
    templateUrl: 'spent/spent.html',
    controller: 'SpentCtrl'
  });
}])


privilegeApp.controller('SpentCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.dateTime = Date();
  $http.get('/app/money_spent/money_spent.json').then(function(data) {
    $scope.spenditures = data.data;
    console.log('spenditures', $scope.spenditures);
  });

  $scope.saveData = function () {
    window.localStorage['moneySpent'] = angular.toJson(spending);
    $scope.output = 'Ok, got it: ' + JSON.stringify($scope.spenditures);
    };
}]);
