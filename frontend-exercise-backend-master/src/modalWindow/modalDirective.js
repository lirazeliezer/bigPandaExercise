'use strict';
bpApp.directive('bpModal', function () {
    return {
        restrict: 'E',
        controller:'modalCtrl',
        templateUrl:'modalWindow/modalTemplate.html',
        scope: {
            isEditable: "=isEditable",
            comment:    "=comment",
            showModal:  "=showModal",
            commentsList: "=commentsList"
        }
    };
});
