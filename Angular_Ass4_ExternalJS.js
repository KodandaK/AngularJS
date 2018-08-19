
var app = angular.module('myApp', []);
app.controller('CDController', function($scope) {
    
	$scope.CD = { CDId : 234187, CDTitle : "Wipro Bulb", CDPrice : "450" +" Rupes"};
    $scope.getAllDetails = function() {
		return $scope.CD.CDId + " " + $scope.CD.CDTitle + " " + $scope.CD.CDPrice ; };

});
