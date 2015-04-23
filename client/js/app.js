;(function() {
	'use strict';

	var lunchApp = angular.module('lunchApp', [
			'ngRoute',
			'lunchController',
			'lunchServices',
			'firebase',
			'ngCookies'
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
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'authCtrl'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'authCtrl'
		}).
		otherwise({
			redirectTo: '/menus'
		});
	}]).run(['$location', 'Session', '$rootScope', function($location, Session, $rootScope) {
		$rootScope.$on('$locationChangeStart', function(event, next, prev) {

			// if (next.split('#')[1] !== '/login') {
				// if (!Session.isLoggedIn()) {
				// 	console.log(111);
				// 	event.preventDefault();
				// 	$location.path('/login');
				// } else {
				// 	console.log(222);
				// 	Session.logout(false);
				// }
			// }
		});
	}]);

	lunchApp.constant('FIREBASE_URL', 'https://lunchappntq.firebaseio.com/');
})();
