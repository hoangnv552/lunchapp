;(function() {
	'use strict';

	angular.module('lunchServices').factory('Auth', ['FIREBASE_URL', '$rootScope', '$q', function(FIREBASE_URL, $rootScope, $q) {
		var rootRef = new Firebase(FIREBASE_URL);

		var Auth = {

			// Handle Email/Password login
			// return a promise
			authWithPassword: function(userObj) {
				var deferred = $q.defer();
				console.log(userObj);

				rootRef.authWithPassword(userObj, function onAuth(err, user) {
					if (err) {
						deferred.reject(err);
					}

					if (user) {
						deferred.resolve(user);
					}
				});

				return deferred.promise;
			},

			// Logout
			logout: function() {
				rootRef.unauth();
			},

			// Create a user but login
			// return a promise
			createUser: function(userObj) {
				var deferred = $q.defer();
				rootRef.createUser(userObj, function(err) {
					if (!err) {
						deferred.resolve(123);
					} else {
						deferred.reject(err);
					}
				});

				return deferred.promise;
			},

			// Create a user then login
			createUserAndLogin: function(userObj) {
				return createUser(userObj).then(function() {
					return authWithPassword(userObj);
				});
			},

			// authenticate anonymously
			// Return a promise
			authAnonymously: function() {
				var deferred = $q.defer();
				rootRef.authAnonymously(function(err, authData) {
					if (authData) {
						deferred.resolve(authData);
					}

					if (err) {
						deferred.reject(err);
					}
				});

				return deferred.promise;
			}
		};
		
		return Auth;
	}]);
})();