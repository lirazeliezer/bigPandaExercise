'use strict';
var bpApp = angular.module('bpApp', []);

bpApp.controller("commentsCtrl",['$scope','webRequestService','$q', 'webRequestUrl',
                                 function($scope,webRequestService,$q,webRequestUrl){
    $scope.showModal=false;
    
    // initialize comments list
    webRequestService.getRequest(webRequestUrl.getUrl,
        function (response) {
            $scope.commentsList = response.data;
        }
    );
    
    $scope.openModal = function(comment,isEditable){
        $scope.showModal = true;
        $scope.isEditable = isEditable;
        $scope.comment= comment;        
    };
    
  }]);