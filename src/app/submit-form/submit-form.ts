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
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            if(dd<10) {
	        dd='0'+dd
            } 

            if(mm<10) {
                mm='0'+mm
            }
             
            fbutil.ref('forms').push({
                'clientId': user.uid,
                'name': vm.generalInformation.name,
                'dateOfBirth': vm.generalInformation.dateOfBirth,
                'placeOfBirth': vm.generalInformation.placeOfBirth,
                'countryOfBirth': vm.generalInformation.countryOfBirth,
                'daytimeTelephoneNumber': vm.generalInformation.daytimeTelephoneNumber,
                'mobileTelephoneNumber': vm.generalInformation.mobileTelephoneNumber,
                'email': vm.generalInformation.email
                'dateSubmitted': mm+'/'+dd+'/'+yyyy;
                  
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
