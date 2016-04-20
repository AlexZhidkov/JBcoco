(function() {
    'use strict';
    
    angular
        .module('app.submitForm')
        .config(submitFormRoute);

    /* @ngInject */
    function submitFormRoute($routeProvider) {
         $routeProvider.whenAuthenticated('/submitForm', {
             templateUrl: 'app/submit-form/submit-form.html',
             controller: 'SubmitForm',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
