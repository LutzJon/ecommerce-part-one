angular.module("myApp").service("mainService", function($scope, $http){
   this.getProducts = function() {
   	 return $http ({
   	 	method: 'GET',
   	 	url: '/products',
   	 });
   };
});