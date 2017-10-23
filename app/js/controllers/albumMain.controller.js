albumMainController.$inject = ['$scope','$rootScope','$http','albumDataService','ngDialog'];

export default function albumMainController ($scope,$rootScope,$http,albumDataService,ngDialog){
	if($rootScope.data == undefined){
		$rootScope.data = {Movies:[],Games:[],Music:[],Sports:[]};
	}
	if($rootScope.titl == undefined){
		$rootScope.titl;
	}
    $http({
	  method: 'GET',
	  url: '/app/data.json'
	}).then(function successCallback(response) {
	    $scope.albums = response.data;
	  }, function errorCallback(response) {
	    console.log(response.status)
	  });
	$scope.showDetails = function (content,title) {
		var data = [];
		data.push(content);
		data.push($rootScope.data[title]);
		albumDataService.addData(data);
	}
	$scope.popupShow = function (name) {
		$rootScope.titl = name;
		ngDialog.open({ template: '/app/views/popup.html', controller: 'albumMainController' });
	}
	$scope.addVideo = function (title,description,link) {
		link = validateYouTubeUrl(link);
		if(link != undefined){
			$rootScope.data[$rootScope.titl].push({title:this.title,description:this.description,link:link});
			ngDialog.close();
		}
	}
	function validateYouTubeUrl(link){
	    var url = link
	        if (url != undefined) {
	            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
	            var match = url.match(regExp);
	            if (match && match[2].length == 11) {
	               link = 'https://www.youtube.com/embed/' + match[2]
	            }
	            else {
	            	$scope.error = "Url isn't valid";
	                return link = undefined;
	            }
	        }else{
	        	$scope.error = " There is no url";
				return link =undefined;
	        }
	    return link;
	}
}