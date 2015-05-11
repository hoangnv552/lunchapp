// $(":checkbox").on('change', function () {
//     $("[name='menu']").not(this).prop('checked', false);
// });
;(function() {
	'use strict';

	var lunchApp = angular.module('lunchApp', [
			'ngRoute',
			'lunchController',
			'lunchServices',
			'firebase',
			'ngCookies',
			'720kb.datepicker'
		]);

	lunchApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/menus/:date/add', {
			templateUrl: 'views/menu.html',
			controller: 'menuCtrl'
		}).
		when('/date/create', {
			templateUrl: 'views/date.html',
			controller: 'dateCtrl'
		}).
		when('/menus', {
			templateUrl: 'views/date-view.html',
			controller: 'dateViewCtr'
		}).
		when('/menus/:date/view', {
			templateUrl: 'views/menus-detail.html',
			controller: 'dateViewCtr'
		}).
		when('/menus/register', {
			templateUrl: 'views/register-menu.html',
			controller: 'registerMenuCtrl'
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
			redirectTo: '/menus/register'
		});
	}]).run(['$location', 'Session', '$rootScope', function($location, Session, $rootScope) {
		$rootScope.$on('$locationChangeStart', function(event, next, prev) {

			if (next.split('#')[1] !== '/login') {
				if (!Session.isLoggedIn()) {
					if (next.split('#')[1] === '/register') {
						$location.path('/register');
					} else {
						console.log(111);
						event.preventDefault();
						$location.path('/login');
					}

				} else {
					console.log(222);
					// Session.logout(false);
				}
			}
		});
	}]);

	lunchApp.constant('FIREBASE_URL', 'https://lunchappntq.firebaseio.com/');
	lunchApp.constant('TIME', 2315);
})();

