import * as angular from 'angular';
import 'angular-route';

const MODULE_NAME = 'UsersApp';

const appModule = angular
    .module(MODULE_NAME, ['ngRoute'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function config(
            $routeProvider: angular.route.IRouteProvider,
            $locationProvider: angular.ILocationProvider
        ) {
            $locationProvider.hashPrefix('');
            $routeProvider
                .when('/', {
                    template: '<dashboard></dashboard>'
                })
                .when('/route1', {
                    template: "<div style='padding: 10px; background-color: lightblue; margin-bottom: 5px'> router-outlet: /route 1 (AngularJS)</div>"
                })
                .when('/route2', {
                    template: "<div style='padding: 10px; background-color: lightblue; margin-bottom: 5px'> router-outlet: /route 2 (AngularJS)</div>"
                })
                .when('/route4', {
                    template: "<div style='padding: 10px; background-color: lightblue; margin-bottom: 5px'> router-outlet: /route 4 (AngularJS)</div>"
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);

appModule.component('dashboard', {
    template: `
        <div class="jumbotron">
            <h1 class="display-4">User Details App</h1>
            <p class="lead">Welcome to the Application Dashboard!</p>
            <a class="btn btn-primary btn-lg" href="#!/users" role="button">Go to Users Details</a>
        </div>
    `
});