;(function() {
	'use strict';

	var appController = function($scope, $location, Session) {
		$scope.isLoggedIn = function() {
			return Session.isLoggedIn();
		};

		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};
	};

	appController.$inject = ['$scope', '$location', 'Session'];
	angular.module('lunchController').controller('appController', appController);
})();
