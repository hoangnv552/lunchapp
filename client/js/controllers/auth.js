;(function() {
	'use strict';

	var authCtrl = function($scope, $location, Auth, $cookieStore, Session, $rootScope) {
		$scope.login = function() {

			console.log($cookieStore.get('isLoggedIn'));
			Auth.authWithPassword($scope.user).then(function(response) {
				console.log(response);
				if (response.uid) {
					Session.login();
					console.log($cookieStore.get('isLoggedIn'));

					$cookieStore.put('username', response.password.email);
				}
			}, function(error) {
				$scope.errorMessage = error.message;
			});
		};

		$scope.register = function() {
			if ($scope.user.password === $scope.user.repassword) {

				Auth.createUser($scope.user).then(function(response) {
					if (response === true) {
						$location.path('/login');
					}
				}, function(error) {
					$scope.errorMessage = error.message;
				});
			} else {
				$scope.error = 'Password != Repassword';
			}
		};
	};

	authCtrl.$inject = ['$scope', '$location', 'Auth', '$cookieStore', 'Session', '$rootScope'];

	angular.module('lunchController').controller('authCtrl', authCtrl);
})();
