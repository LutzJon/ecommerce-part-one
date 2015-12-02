angular.module("myApp").controller("mainCtrl", function($scope, mainService){
   var getProducts = function(){
   	mainService.getProducts().then(function(results){
   		console.log(results);
   		$scope.products = results.data;
   	});
   };
   getProducts();
});