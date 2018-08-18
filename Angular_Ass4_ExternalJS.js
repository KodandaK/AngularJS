
var app = angular.module('myApp', []);
app.controller('CDController', function($scope) {
    $scope.CDId = "234187";
    $scope.CDTitle = "Wipro Bulb";
	$scope.CDPrice = "450";
    $scope.getAllDetails = function() {
		return $scope.CDId + " " + $scope.CDTitle + " " + $scope.CDPrice +"rupees"; 
    };
});
