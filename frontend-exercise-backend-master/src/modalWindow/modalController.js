'use strict';
bpApp.controller("modalCtrl",['$scope','webRequestService','$q','webRequestUrl', 
                              function($scope,webRequestService,$q,webRequestUrl) {
    
    $scope.closeModal = function(){
        $scope.showModal = false;  
        $scope.editedComment="";
    };
    
    $scope.confirmChanges = function(comment){
        var defferd = $q.defer();
        
        handleChanges(comment,defferd).then(
            function(succsesObj){
                $scope.closeModal();

                //refreshing the comments list after changes
                webRequestService.getRequest(webRequestUrl.getUrl,
                    function (response) {
                        $scope.commentsList = response.data;
                    });
            }, function(errorObj){
                $scope.closeModal();
            });  
    }
    
    // delete or update comment accordingly
    var handleChanges= function(comment,defferd){
         if ($scope.isEditable){
            webRequestService.putRequest(
                webRequestUrl.putUrl+comment.id,
                {"comment":$scope.editedComment},
                function (response) {
                    // TODO- register to log and not to console with more details
                    // inform the user something went wrong
                    console.log('comment saved');
                    defferd.resolve();
                },
                function (errResponse) { 
                    console.log("Update failed: " + errResponse.data);
                    defferd.reject();
                }
            );
        }else{
            webRequestService.deleteRequest(
                webRequestUrl.deleteUrl+comment.id,
                 function (response) { 
                    console.log('comment deleted');
                    defferd.resolve();
                 },
                 function (errResponse) { 
                    console.log("Delete faild: " + errResponse.data);
                    defferd.reject();
                }
            );
        }
        return defferd.promise;
    }
}]);