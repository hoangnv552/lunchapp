;(function() {
	'use strict';

	var menuCtrl = function($scope, Menus, $routeParams) {

		var date = $routeParams.date;
		if (date) {

			Menus.get(date).$loaded().then(function(data) {
				$scope.menus = data;
			});

			Menus.getMemo(date).$loaded().then(function(data) {
				$scope.memo = data.memo;
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

			$scope.updateMenu = function(menu) {
				console.log(menu);
				$scope.menus.$save(menu);
			};

			$scope.addMemo = function() {
				if ($scope.memo) {
					var result = Menus.addMemo(date, $scope.memo);
					if (result) {
						$scope.notify = "Save memo success";
					}
				} else {
					$scope.notify = "You have not entered Memo";
				}
			}
		}
	};

	menuCtrl.$inject = ['$scope', 'Menus', '$routeParams'];
	angular.module('lunchController').controller('menuCtrl', menuCtrl);
})();
