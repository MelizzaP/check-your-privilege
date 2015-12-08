'use strict';

var privilegeApp = angular.module('myApp.spent', ['ngRoute', 'privilegeFilters']);

privilegeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spent', {
    templateUrl: 'views/spent.html',
    controller: 'SpentCtrl'
  });
}])


privilegeApp.controller('SpentCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.sort = 'time';
  $http.get('/app/money_spent/money_spent.json').then(function(data) {
    $scope.spenditures = data.data;
  });

  $scope.saveData = function (spending) {
    var jsonSpend = JSON.parse(angular.toJson(spending));
    window.localStorage['moneySpent'] = jsonSpend;
    $scope.output = 'Ok, got it: ' + JSON.stringify($scope.spending);
    $scope.spenditures.push(jsonSpend);
    };


}]);
