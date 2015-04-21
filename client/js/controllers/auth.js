;(function() {
	'use strict';

	var authCtrl = function($scope, $location, Auth) {
		$scope.login = function() {
			Auth.authWithPassword($scope.user).then(function(response) {
				console.log(response);
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

	authCtrl.$inject = ['$scope', '$location', 'Auth'];

	angular.module('lunchController').controller('authCtrl', authCtrl);
})();