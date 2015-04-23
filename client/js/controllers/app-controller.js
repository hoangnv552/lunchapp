;(function() {
	'use strict';

	var appController = function($scope, $location, Session, Auth) {
		$scope.isLoggedIn = function() {
			return Session.isLoggedIn();
		};

		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};

		$scope.logout = function() {
			console.log(1233);
			Auth.logout();
			return Session.logout(true);
		};
	};

	appController.$inject = ['$scope', '$location', 'Session', 'Auth'];
	angular.module('lunchController').controller('appController', appController);
})();
