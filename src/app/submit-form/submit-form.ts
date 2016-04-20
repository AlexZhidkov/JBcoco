(function() {
    "use strict";

    angular
        .module('app.submitForm')
        .controller('SubmitForm', SubmitForm);

    /**
     * @ngInject
     */
    function SubmitForm(Auth, $location, fbutil, user, logger) {
        var vm = this;
        vm.user = user;
        vm.name = user[user.provider].displayName;
        vm.profileImageURL = user[user.provider].profileImageURL
        vm.submit = submit;

        function submit() {
            fbutil.ref('forms').push({
                'clientId': user.uid,
                'name': vm.name
             }, function(error) {
                if (error) {
                    logger.error('Form submit failed', error, 'Error');
                }
                else {
                    logger.success('New form submitted', vm, 'Saved');
                }
            });
        }
    }
})();
