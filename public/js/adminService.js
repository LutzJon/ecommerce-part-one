angular.module("myApp").service("adminService", function($http){
  this.addProduct = function(product){
  	$http ({
  		method: 'POST',
  		url: '/products',
  		data: product

  	})
  }
  this.updateProduct = function(id, product){
  	$http ({
  		method: 'PUT',
  		url: '/product/' + id,
  		data: product

  	})
  }
  this.deleteProduct = function(id) {
  	$http ({
  		method: 'DELETE',
  		url: '/product/' + id,
  	})
  }
});