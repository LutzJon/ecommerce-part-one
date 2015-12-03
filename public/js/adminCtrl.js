angular.module("myApp").controller("adminCtrl", function($scope, adminService, mainService){
 var getProducts = function() {
 	mainService.getProducts().then(function(res){
 		$scope.products = res.data;
 	})
 }()
  $scope.addProduct = function(product) {
  	adminService.addProduct(product).then(function(result){
  		console.log(result, '4858588');
        $scope.newProduct = {};

  	
    })
  }

  $scope.updateProduct = function(id, product){
  	updateObject = {
  		title: product.title,
  		price: product.price,
  		description: product.description,
  	}
  	adminService.updateProduct(id, product).then(function(res){
        $scope.selectedProduct = {};
  	})
  	//getProducts();
  }
  $scope.deleteProduct = function(id) {

  	adminService.deleteProduct(id).then(function(res){
       // getProducts();
       console.log("you suck");
  		$scope.selectedProduct = {};
  	})
  }
});