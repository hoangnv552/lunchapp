;(function() {
	'use strict';

	var appController = function($scope, $location, Session, Auth, $cookieStore) {
		$scope.username = Session.username();
		$scope.isLoggedIn = function() {
			return Session.isLoggedIn();
		};

		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};

		$scope.logout = function() {
			console.log(1233);
			Auth.logout();
			$cookieStore.remove('username');
			return Session.logout(true);
		};
	};

	appController.$inject = ['$scope', '$location', 'Session', 'Auth', '$cookieStore'];
	angular.module('lunchController').controller('appController', appController);
})();
