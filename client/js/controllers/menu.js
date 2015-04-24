;(function() {
	'use strict';

	var menuCtrl = function($scope, Menus, $routeParams) {

		var date = $routeParams.date;
		if (date) {

			Menus.get(date).$loaded().then(function(data) {
				$scope.menus = data;
			});

			$scope.addMenu = function() {
				console.log($scope.menu);
				Menus.create(date, $scope.menu).then(function(response) {
					delete $scope.menu;
					console.log(response);
				}, function(error) {
					console.log(error);
				});
			};

			$scope.deleteMenu = function(menuId) {
				console.log(menuId);
				Menus.deleteMenu(date, menuId);
			};

			// console.log(menuId);
			// $scope.item = Menus.get(menuId);
			// console.log($scope.item);
		}
	};

	menuCtrl.$inject = ['$scope', 'Menus', '$routeParams'];
	angular.module('lunchController').controller('menuCtrl', menuCtrl);
})();
