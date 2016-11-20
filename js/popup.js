var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {
	$scope.hours = localStorage["rp_calc-hours"];
	$scope.mins = localStorage["rp_calc-mins"];

	$scope.rp_time = moment(new Date()).add('hours', $scope.hours).add('minutes', $scope.mins).format('MM/DD/YYYY HH:mm:ss');

    $scope.calctime = function() {
        $scope.rp_time = moment(new Date()).add('hours', $scope.hours).add('minutes', $scope.mins).format('MM/DD/YYYY HH:mm:ss');
				document.querySelector('#results').select();
  			document.execCommand('copy');
				localStorage["rp_calc-hours"] = $scope.hours;
        localStorage["rp_calc-mins"] = $scope.mins;
    };
}]);
