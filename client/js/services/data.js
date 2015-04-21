;(function() {
	'use strict';

	angular.module('lunchServices').factory('Menus', ['FIREBASE_URL', '$firebaseArray', '$firebaseObject', function(FIREBASE_URL, $firebaseArray, $firebaseObject){
		var ref = new Firebase(FIREBASE_URL);
		var menus = $firebaseArray(ref.child('menus'));
		
		var Menus = {
			all: $firebaseObject(ref.child('menus')),
			create: function(menu) {
				return menus.$save();
			},
			get: function(menuId) {
				return $firebaseObject(ref.child('menus').child(menuId));
			},
			delete: function(menuId) {
				return $firebaseObject(ref.child('menus').child(menuId)).$remove();
			}
		}

		return Menus;
	}]);
})();