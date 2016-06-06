angular.module('ices.dashboard', ['ngRoute', 'ices.authentication.user.authentication'])

    .config(function ($routeProvider) {
        $routeProvider.when(
            '/dashboard',
            {
                templateUrl: 'dashboard/dashboard.html',
                controller: 'DashboardController',
                access: {
                    requiredLogin: true
                }
            }
        );
    })

    .controller('DashboardController', function ($scope, $location, $timeout, UserAuthentication) {

        $timeout(function () {
            $(document).foundation();
        });

        $scope.newPatient = function () {
            return $location.path('/editPatient/new');
        };

        $scope.search = function () {
            return $location.path('/search');
        };

        $scope.users = function () {
            return $location.path('/users');
        };

        $scope.logout = function () {
            UserAuthentication.logout();
        };
    }
);
