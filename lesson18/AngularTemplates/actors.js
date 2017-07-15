var catsApp = angular.module('actorsApp', []);

catsApp.controller('ActorsGalleryCtrl', function($scope){
  function actor(photoURL,infoURL,actorName) {
    this.photoURL = photoURL;
    this.infoURL = infoURL;
    this.actorName = actorName;
  }
  
  $scope.actors = [
    new actor("https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg","http://www.imdb.com/name/nm0000129/?ref_=nv_sr_1","טום קרוז"),
    new actor("https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_SY1000_CR0,0,701,1000_AL_.jpg","http://www.imdb.com/name/nm0000136/?ref_=nv_sr_1","ג'וני דפ"),
    new actor("https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg","http://www.imdb.com/name/nm0000093/?ref_=nv_sr_1","בראד פיט"),
    new actor("https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_SY1000_SX750_AL_.jpg","http://www.imdb.com/name/nm0000243/?ref_=nv_sr_1","דנזל וושינגטון")
    ];
});