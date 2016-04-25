(function() {
    "use strict";

    var app = angular.module('app.submitFormGeneralInformation', ['ngMaterial']);

    function GeneralInformation($mdDialog) {
        var vm = this;
        vm.openMenu = openMenu;

        function openMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
   }

    app.component('submitFormGeneralInformation', {
        templateUrl: 'app/submit-form/general-information.html',
        controller: GeneralInformation,
        controllerAs: 'vm',
        bindings: {
            generalInformation: '='
        }
    });

})();
