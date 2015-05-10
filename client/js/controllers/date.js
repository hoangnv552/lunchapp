;(function() {
	'use strict';

	var dateCtrl = function($scope, $location, Menus) {
		var now = moment().format('YYYY-MM-DD');
		$scope.date = now;
		var days = [];

		Menus.all.$loaded().then(function(data) {
			$scope.menusDate = data;
			data.forEach(function(data, key) {
				days.push(key);
			})
		});

		$scope.addDate = function() {
			console.log(days);
			var idx = days.indexOf($scope.date);

			if (idx === -1) {
				var response = Menus.setData($scope.date);

				if (response) {
					$location.path('/menus/' + $scope.date + '/add');
				}
			} else {
				$scope.error = 'Date ' + $scope.date + ' is exist';
			}

		};

		$scope.deleteDate = function(dateId) {
			Menus.deleteDate(dateId);
		};
	};

	dateCtrl.$inject = ['$scope', '$location', 'Menus'];
	angular.module('lunchController').controller('dateCtrl', dateCtrl);
})();
