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

				if (needRedirect) {
					$location.path('/login');
				}
			}
		};
	}]);
})();
