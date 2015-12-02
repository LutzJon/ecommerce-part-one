angular.module("myApp").controller("adminCtrl", function($scope, adminService, mainService){
 var getProducts = function() {
 	mainService.getProducts().then(function(res){
 		$scope.products = res.data
 	})
 }()
  $scope.addProduct = function(product) {
  	adminService.addProduct(product).then(function(result){
  		console.log(result, '4858588');
        $scope.newProduct = {};

  	
    })
  }

  $scope.updateProduct = function(id, product){
  	adminService.updateProduct(id, product).then(function(res){
        $scope.selectedProduct = {};
  	})
  }
  $scope.deleteProduct = function(id, product) {
  	
  	adminService.deleteProduct(id).then(function(res){

  		$scope.selectedProduct = {};
  	})
  }
});