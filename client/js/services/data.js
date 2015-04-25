;(function() {
	'use strict';

	angular.module('lunchServices').factory('Menus', ['FIREBASE_URL', '$firebaseArray', '$firebaseObject', '$q', function(FIREBASE_URL, $firebaseArray, $firebaseObject, $q){
		var ref = new Firebase(FIREBASE_URL);
		var menusRef = ref.child('menus');

		var Menus = {
			all: $firebaseObject(ref.child('menus')),
			create: function(id, menu) {
				var menus = $firebaseArray(ref.child('menus').child(id));
				return menus.$add(menu);
			},
			setData: function(id) {
				menusRef.child(id).set({
				});
				return true;
			},
			registerMenu: function(date, username, menu) {
				ref.child('registerMenu').child(date).child(username).set(menu);
			},
			get: function(menuId) {
				return $firebaseObject(ref.child('menus').child(menuId));
			},
			userWithMenu: function(menuId) {
				return $firebaseObject(ref.child('registerMenu').child(menuId));
			},
			deleteDate: function(date) {
				return $firebaseObject(ref.child('menus').child(date)).$remove();
			},
			deleteMenu: function(date, menuId) {
				return $firebaseObject(ref.child('menus').child(date).child(menuId)).$remove();
			},
			updateMenu: function(date, menuId, menu) {
				return $firebaseArray(ref.child('menus').child(date).child(menuId).set(menu));
			}
		};

		return Menus;
	}]);
})();
