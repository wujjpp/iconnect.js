'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('ToDoCtrl', ['$scope','$state','$controller', 'TaskService', function ($scope, $state,$controller, Task) {

    $state.current.data={
      pageTitle: 'My Tasks',
      title: 'My Tasks',
      description: 'This page is for maintaining my tasks'
    };

    var tasks = Task.query();

    $scope.tasks = tasks;

    $scope.newTask = {name:''};

    //create task
    $scope.addTask = function () {
      var task = new Task({taskName: $scope.newTask.name});
      task.$save(function (task) {
        $scope.tasks.push(task);
      });
      $scope.newTask.name = '';
    };

    //update task
    $scope.updateTask = function (index) {
      var task = $scope.tasks[index];

      Task.update({id: task.id}, task, function(resTask){
        console.log(resTask);
      });
    };

    //delete data
    $scope.deleteTask = function (index) {
      var task = $scope.tasks[index];
      task.$delete({id: task.id}, function(){
        $scope.tasks.splice(index, 1);
      });
    };

    $scope.callFoo = function(){
      console.log('callFoo called');
    };
  }]);
