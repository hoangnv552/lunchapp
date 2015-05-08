;(function() {
	'use strict';

	var registerMenuCtrl = function($scope, $routeParams, Menus, $cookieStore, TIME, Session) {
		$scope.selectedId = [];
		var now = moment().format('YYYY-MM-DD');
		$scope.now = now;
		var username = Session.username();

		var time = moment().format('HHmm');

		if (parseInt(time) <= TIME) {
			$scope.isExpire = true;
		} else {
			$scope.isExpire = false;
		}

		Menus.get(now).$loaded().then(function(data) {
			if (data) {
				$scope.menus = data;
			} else {
				$scope.error = 'Menu today not created';
			}

		});

		Menus.userWithMenu(now).$loaded().then(function(data) {
			if (data) {
				$scope.userWithMenu = data;
				$scope.username = username;
				$scope.totalPrice = 0;
				var arrTotalUserMenu = [];
				var count = 1;
				var i;

				angular.forEach($scope.userWithMenu, function(user) {

					$scope.totalPrice += parseInt(user.price, 10);

					var flgCheck = false;

					var length = arrTotalUserMenu.length;
					if (length) {
						for (i = 0; i < length; i++) {
							if (user.name === arrTotalUserMenu[i].menu) {
								arrTotalUserMenu[i].total++;
								flgCheck = true;
							}
						}

						if (flgCheck === false) {
							arrTotalUserMenu.push({menu: user.name, total: count});
						}

					} else {
						arrTotalUserMenu.push({menu: user.name, total: count});
					}

				});
				$scope.sumtotal = arrTotalUserMenu;
			} else {
				$scope.error = 'Menu today not created';
			}
		});

		$scope.toggleSelection = function(idMenu) {

			var idx = $scope.selectedId.indexOf(idMenu);

			if (idx < 0) {
				$scope.selectedId.push(idMenu);
			} else {
				$scope.selectedId.splice(idx, 1);
			}
		};

		$scope.registerMenu = function() {
			if (parseInt(time) <= TIME) {
				var menu = $scope.selectedId[0];
				menu.username = username;

				Menus.registerMenu(now, username, menu);
			}
		};

		$scope.deleteMenuUser = function(userId) {
			Menus.deleteMenuUser(now, userId);
		}
	};

	registerMenuCtrl.$inject = ['$scope', '$routeParams', 'Menus', '$cookieStore', 'TIME', 'Session'];
	angular.module('lunchController').controller('registerMenuCtrl', registerMenuCtrl);
})();
