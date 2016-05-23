(function() {
    "use strict";

    var app = angular.module('app.submitFormIdentificationDetails', ['ngMaterial']);

    function IdentificationDetails($mdDialog) {
        var vm = this;
        vm.openMenu = openMenu;

        function openMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
   }

    app.component('submitFormIdentificationDetails', {
        templateUrl: 'app/submit-form/identification-details.html',
        controller: IdentificationDetails,
        controllerAs: 'vm',
        bindings: {
            identificationDetails: '='
        }
    });

})();
