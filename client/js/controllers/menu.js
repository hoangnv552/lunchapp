;(function() {
	'use strict';

	var menuCtrl = function($scope, Menus, $routeParams) {
		$scope.menus = Menus.all;
		
		$scope.menu = {name: "", price: ""};

		$scope.addMenu = function() {
			Menus.create($scope.menu);
		};

		var menuId = $routeParams.menuId;
		if (menuId) {
			$scope.item = Menus.get(menuId);
			console.log($scope.item);
		};
		$scope.deleteMenu = function(menuId) {
			Menus.delete(menuId);
		};
		
	}

	menuCtrl.$inject = ['$scope', 'Menus', '$routeParams'];
	angular.module('lunchController').controller('menuCtrl', menuCtrl);
})();