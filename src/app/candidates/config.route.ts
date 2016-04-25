(function() {
    'use strict';
    
    angular
        .module('app.candidates')
        .config(candidates);

    /* @ngInject */
    function candidates($routeProvider) {
         $routeProvider.whenAuthenticated('/candidates', {
             templateUrl: 'app/candidates/candidates.html',
             controller: 'Candidates',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
