;(function() {
	'use strict';

	var dateCtrl = function($scope, $location, Menus) {

		Menus.all.$loaded().then(function(data) {
			$scope.menusDate = data;
		});

		$scope.addDate = function() {
			// var now = moment().format('YYYY-MM-DD');
			var response = Menus.setData($scope.date);

			if (response) {
				$location.path('/menus/' + $scope.date + '/add');
			}

		};

		$scope.deleteDate = function(dateId) {
			Menus.deleteDate(dateId);
		};
	};

	dateCtrl.$inject = ['$scope', '$location', 'Menus'];
	angular.module('lunchController').controller('dateCtrl', dateCtrl);
})();
