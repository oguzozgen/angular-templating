/**
 * @classdesc Application app.js main controller.
 */
(function() {
    angular.module('secApp', [])
     .controller('mainController', function($scope,$log,customModuls) {
        var mainController = this;
        todoList.todos = [
            {text:'learn AngularJS', done:true},
            {text:'build an AngularJS app', done:false}];
            
        mainController.customMethod= function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
              count += todo.done ? 0 : 1;
            });
            return count;
          };
    });
    
}());