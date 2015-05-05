;(function() {
	'use strict';

	angular.module('lunchServices').factory('Session', ['$location', '$cookieStore', function($location, $cookieStore) {

		return {
			isLoggedIn: function() {
				return $cookieStore.get('isLoggedIn');
			},
			login: function() {
				$cookieStore.put('isLoggedIn', true);

				$location.path('/menus');
			},
			logout: function(needRedirect) {
				$cookieStore.put('isLoggedIn', false);
				$cookieStore.remove('username');
				if (needRedirect) {
					$location.path('/login');
				}
			},
			username: function() {
				var username = $cookieStore.get('username');
				if (username) {
					username = username.replace(/@[^ ]*/g, '');
					username = username.replace('$', '');
					username = username.replace('.', '');
					username = username.replace('#', '');
					username = username.replace('-', '');
					username = username.replace('%', '');
				}

				return username;
			}
		};
	}]);
})();
