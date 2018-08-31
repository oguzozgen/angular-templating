/**
 * @classdesc CustomModuls file is define the custom modules shape and directory
 */
(function() {
    var customModuls=function($http){
        var getCustomUser=function(){
            return $http.get("https://api.github.com/users/" + username)
                        .then(
                            function(response){
                                return response.data;
                            }
                        );
        };

        return{
            getCustomUser:getCustomUser
        };
    };
    //Module belonged App
    var module=angular.module("secApp");
    //DI and define the customModuls
    module.factory("customModuls",customModuls);


    
}());