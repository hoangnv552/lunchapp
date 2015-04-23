;(function() {
	'use strict';

	var authCtrl = function($scope, $location, Auth, $cookieStore, Session) {
		$scope.login = function() {

			console.log($cookieStore.get('isLoggedIn'));
			Auth.authWithPassword($scope.user).then(function(response) {
				if (response.uid) {
					Session.login();
					console.log($cookieStore.get('isLoggedIn'));
				}
			});
		};

		$scope.logout = function() {
			Auth.logout();
		};

		$scope.register = function() {
			Auth.createUser($scope.user).then(function(response) {
				console.log(response);
			});
		};
	};

	authCtrl.$inject = ['$scope', '$location', 'Auth', '$cookieStore', 'Session'];

	angular.module('lunchController').controller('authCtrl', authCtrl);
})();
