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
        vm.generalInformation = getGeneralInformation(user);
        vm.submit = submit;

        function getGeneralInformation(user:any) {
            return {
                name: user[user.provider].displayName,
                profileImageURL: user[user.provider].profileImageURL
            }
        }
        
        function submit() {
                        
            fbutil.ref('forms').push({
                'dateSubmitted': Firebase.ServerValue.TIMESTAMP,
                'clientId': user.uid,
                'profileImageURL': vm.generalInformation.profileImageURL,
                'name': vm.generalInformation.name,
                'dateOfBirth': vm.generalInformation.dateOfBirth,
                'placeOfBirth': vm.generalInformation.placeOfBirth,
                'countryOfBirth': vm.generalInformation.countryOfBirth,
                'daytimeTelephoneNumber': vm.generalInformation.daytimeTelephoneNumber,
                'mobileTelephoneNumber': vm.generalInformation.mobileTelephoneNumber,
                'email': vm.generalInformation.email
                  
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
