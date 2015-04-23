;(function() {
	'use strict';

	var authCtrl = function($scope, $location, Auth, $cookieStore, Session, $rootScope) {
		$scope.login = function() {

			console.log($cookieStore.get('isLoggedIn'));
			Auth.authWithPassword($scope.user).then(function(response) {
				if (response.uid) {
					Session.login();
					console.log($cookieStore.get('isLoggedIn'));
					$rootScope.username = response.password.email;
				}
			});
		};

		$scope.register = function() {
			if ($scope.user.password === $scope.user.repassword) {
				delete $scope.user.repassword;

				Auth.createUser($scope.user).then(function(response) {
					if (response === true) {
						$location.path('/login');
					}
				});
			} else {
				$scope.error = 'Password != Repassword';
			}
		};
	};

	authCtrl.$inject = ['$scope', '$location', 'Auth', '$cookieStore', 'Session', '$rootScope'];

	angular.module('lunchController').controller('authCtrl', authCtrl);
})();
