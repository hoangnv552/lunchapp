;(function() {
	'use strict';

	var lunchApp = angular.module('lunchApp', [
			'ngRoute',
			'lunchController',
			'lunchServices',
			'firebase'
		]);

	lunchApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/menus', {
			templateUrl: 'views/menu.html',
			controller: 'menuCtrl'
		}).
		when('/menus/:menuId/view', {
			templateUrl: 'views/view.html',
			controller: 'menuCtrl'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'authCtrl'
		}).
		otherwise({
			redirectTo: '/menus'
		});
	}]);

	lunchApp.constant('FIREBASE_URL', 'https://lunchappntq.firebaseio.com/');
})();