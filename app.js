var app = angular.module('app', ['ng']);

function usersCtrl($scope){
	$scope.users = [
		{	
			name : 'Jean',
			tel : '0000000'
		},
		{
			name :'Michel',
			tel : "11111111"
		},
		{
			name :'Jean-Michel',
			tel : "222222222"
		}];

	$scope.addUser = function(){
		console.log("added user");

		var userMeta = $scope.userApply;
		var userName = userMeta.userName;
		var tel = userMeta.tel;

		$scope.users.push({name : userName, tel : tel});

		console.log($scope.users.length);
	}

	$scope.removeUser = function(index){
		console.log("deleted user");
		$scope.users.splice(index, 1);
		console.log($scope.users.length);
	}
}

app.controller('usersCtrl', ["$scope",usersCtrl]);

