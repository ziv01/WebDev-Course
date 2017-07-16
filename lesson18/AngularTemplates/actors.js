var catsApp = angular.module('actorsApp', []);

catsApp.controller('ActorsGalleryCtrl', function($scope){
  function actor(firstName,lastName,photoURL,infoURL) {
    this.firstName = firstName;
    this.lastName = lastName;	
	this.fullName = firstName + " " + lastName;	
    this.photoURL = photoURL;
    this.infoURL = infoURL;

  }

  $scope.actors = [
    new actor("טום","קרוז","https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg","http://www.imdb.com/name/nm0000129/?ref_=nv_sr_1"),
    new actor("ג'וני","דפ","https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_SY1000_CR0,0,701,1000_AL_.jpg","http://www.imdb.com/name/nm0000136/?ref_=nv_sr_1"),
    new actor("בראד","פיט","https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg","http://www.imdb.com/name/nm0000093/?ref_=nv_sr_1"),
    new actor("דנזל","וושיגטון","https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_SY1000_SX750_AL_.jpg","http://www.imdb.com/name/nm0000243/?ref_=nv_sr_1")
    ];

	$scope.sortArg = "";
	
	    $scope.setImgBorder = function(event) {
        var currentClass = "gallery-item clearfix ng-scope";
        console.log();
        if (event.currentTarget.className === currentClass) {
          event.currentTarget.className += " setBorder ";
          console.log(event.currentTarget.className);
        }
        else {
          event.currentTarget.className = currentClass;
        }
    };
	/*	
	$http.get('actors.json').then(function(response) {
	return $scope.actors = response.data;
	});
,
	error(function(data, status, headers, config) {
	console.log(“שגיאה");
	});
	*/
});
