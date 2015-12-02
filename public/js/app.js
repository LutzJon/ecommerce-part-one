angular.module("myApp",['ui.router'])


.config(function($urlRouterProvider, $stateProvider){
     $urlRouterProvider.otherwise('/products');
     $stateProvider
     .state('products', {
     	url: '/products',
     	templateUrl: '/templates/products.html',
     	controller: 'mainCtrl'
     })
     .state('admin',{
     	url: '/admin',
     	templateUrl:'/templates/admin.html',
     	controller: 'adminCtrl'
     })
});



 

