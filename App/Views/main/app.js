/**
 * @classdesc Application main js that manages the all modules
 */
(function(){
    var app = angular.module("secApp", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "index.html",
                controller: "mainController"
            })
            .when("/profile/:username", {
                templateUrl: "profile.html",
                controller: "profileController"
            })
            .otherwise({redirectTo:"/main"});
    });
}());