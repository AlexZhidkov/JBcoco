(function () {
    "use strict";

    angular
        .module('app.candidates')
        .factory('CandidateList', CandidateList);

    /**
     * @ngInject
     */
    function CandidateList(fbutil, $firebaseArray) {
        var ref = fbutil.ref('forms');
        return $firebaseArray(ref);
    }
})();
