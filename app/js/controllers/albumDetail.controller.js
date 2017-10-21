albumDetailController.$inject = ["$scope",'$http','albumDataService','$state'];

export default function albumDetailController ($scope,$http,albumDataService,$state){
	
	$scope.data = albumDataService.getData();
	$scope.dataJson = $scope.data[0];
	$scope.obj = $scope.data[1];

	if($scope.data[0] == undefined){
		$state.go('main');
	}
}
