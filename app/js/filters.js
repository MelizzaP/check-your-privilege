'use strict';

angular.module('privilegeFilters', []).filter('check', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  }
});
