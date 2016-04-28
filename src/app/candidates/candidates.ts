(function () {
    "use strict";

    angular
        .module('app.candidates')
        .controller('Candidates', Candidates);

    /**
     * @ngInject
     */
    function Candidates(CandidateList, user, logger) {
        var vm = this;
        vm.forms = CandidateList;
        vm.deleteItem = deleteItem;

        function deleteItem(index: number) {
            vm.forms.$remove(index);
        }
    }
})();
