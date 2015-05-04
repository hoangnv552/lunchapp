;(function() {
	'use strict';

	var dateViewCtr = function($scope, Menus, $routeParams, Session) {
		var username = Session.username();
		
		Menus.all.$loaded().then(function(data) {
			$scope.menusDate = data;
		});

		var date = $routeParams.date;
		if (date) {
			$scope.now = date;
			Menus.userWithMenu(date).$loaded().then(function(data) {
				if (data) {
					$scope.userWithMenu = data;
					$scope.totalPrice = 0;
					$scope.username = username;
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
		}
	};

	dateViewCtr.$inject = ['$scope', 'Menus', '$routeParams', 'Session'];
	angular.module('lunchController').controller('dateViewCtr', dateViewCtr);
})();