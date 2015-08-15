var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {
	$scope.hours = 0;
	$scope.mins = 0;
	
	$scope.rp_time = moment(new Date()).add('hours', ($scope.hours-1)).add('minutes', $scope.mins).format('MM/DD/YYYY HH:mm:ss') + "\t" + 
        			 moment(new Date()).add('hours', $scope.hours).add('minutes', $scope.mins).format('MM/DD/YYYY HH:mm:ss');

    $scope.calctime = function() {
        $scope.rp_time = moment(new Date()).add('hours', ($scope.hours-1)).add('minutes', $scope.mins).format('MM/DD/YYYY HH:mm:ss') + "\t" + 
        				 moment(new Date()).add('hours', $scope.hours).add('minutes', $scope.mins).format('MM/DD/YYYY HH:mm:ss');
    };
}]);

