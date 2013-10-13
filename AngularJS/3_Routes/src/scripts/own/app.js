/**
 * @module     POPRoutes
 * @desc       Main Project Angular Module.
 * @author     Kevin Blanco <mail@kevinblanco.io>
 * @repo       git@github.com:kevinblanco/angularjs-course.git
 */


/*
* Project Routes Configuration
*/

'use strict';

var app = angular.module('POPRoutes', ['ui.bootstrap']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/projects', {
                    templateUrl : 'projects.html',
                    controller  : 'ProjectsCtrl'
                })
                .when('/people', {
                    templateUrl : 'people.html',
                    controller  : 'POPstarsCtrl'
                })
                .otherwise({
                    redirectTo  : '/people'
                });
        }]);


/*
 * POPstars Controller
 */

    app.controller('POPstarsCtrl', ['$scope',
    function($scope){

        $scope.popstars = [
            {
                name : "Kevin Blanco",
                team : "Interactive Development"
            },
            {
                name : "Franklin Garcia",
                team : "Mobile Development"
            }
        ]

    }]);


/*
 * Projects Controller
 */

    app.controller('ProjectsCtrl', ['$scope',
        function($scope){

            $scope.projects = [
                {
                    name    : "AngularJS",
                    client  : "Google",
                    type    : "JS Library"
                },
                {
                    name    : "NodeJS",
                    client  : "NodeJS",
                    type    : "JS Server"
                }
            ]

        }]);
