/**
 * @module     POPControllers
 * @desc       Main Project Angular Module.
 * @author     Kevin Blanco <mail@kevinblanco.io>
 * @repo       git@github.com:kevinblanco/angularjs-course.git
 */


/* 
* Main Project Module
*/

'use strict';
 
angular.module('POPControllers', ['ui.bootstrap'])
  .controller('TodosController', ['$scope', function ($scope) {
 
    $scope.todos = 
    [
      {
        text: 'Learn Angular Controllers',   
        done: true
      },
      {
        text: 'Learn Angular Directives', 
        done: false
      },
      {
        text: 'Learn Angular Services',   
        done: false
      },
      {
        text: 'Learn Angular Factories',   
        done: false
      }
    ];

    /*
    * Add TODOs Function
    */
    $scope.todoAdd = function() {
      $scope.todos.push({
          text:$scope.todoText,
          done:false
      });
      $scope.todoText = '';
    };

    /*
    * Counts the remaining TODOs
    */
    $scope.todoRemaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
   
    /*
    * Delete TODOs that are done (checked)
    */
    $scope.todoDelete = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
 
  }]);

