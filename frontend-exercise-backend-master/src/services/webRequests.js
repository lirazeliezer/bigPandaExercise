'use strict';
bpApp.service('webRequestService', function ($http){
    var defaultError = function(response){
        console.log("general error: " + response.data);
    };
    
    this.getRequest = function(getUrl,success, error){
         $http.get(getUrl).then(success,error || defaultError);
    }
    
    this.putRequest = function(putUrl, data,success, error){
         $http.put(putUrl,data).then(success,error || defaultError);
    }
    
    this.deleteRequest = function(deleteUrl,success, error){
         $http.delete(deleteUrl).then(success,error || defaultError);
    }
});

bpApp.constant('webRequestUrl', {
    getUrl: "http://localhost:3000/comments",
    deleteUrl: "http://localhost:3000/comments/:",
    putUrl: "http://localhost:3000/comments/:"
});