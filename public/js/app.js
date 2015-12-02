angular.module("myApp",[ui-router])
 

 .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/products')
      $stateProvider
         .state('products', {
         	url: '/products',
         	controller: 'mainCtrl',
         	templateUrl: '/templates/products.html',
            resolve:{
               products: function(mainService){
                    return weatherService.getWeather();
                }
            }
        })





         
         .state('admin', {
         	url:'/admin', 
         	controller: 'adminCtrl',
         	templateUrl: '/templates/admin.html',
         	  resolve: {
         		reportsData: function(reportService) {
         			return reportService.getReports();
         		}
         	}
         })