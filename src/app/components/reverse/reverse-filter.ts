'use strict';

/* Filters */

angular.module('app')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });