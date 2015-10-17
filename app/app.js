angular.module('angular-app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('app', {
            url: '/form',
            templateUrl: 'templates/form.tpl.html',
            controller: 'formController'
        })
        .state('app.login', {
            url: '/login',
            templateUrl: 'templates/login.tpl.html'
        })
        
        // url will be /form/interests
        .state('app.toggle', {
            url: '/toggle',
            templateUrl: 'templates/toggle.tpl.html'
        })
        
        // url will be /form/payment
        .state('app.detail', {
            url: '/detail',
            templateUrl: 'templates/detail.tpl.html'
        });

    $urlRouterProvider.otherwise('/form/login');
})
.controller('formController', function($scope,$state) {
      $scope.user = {};
    
    $scope.login=function(){
        if ($scope.user.uname=="admin" && $scope.user.pass=="admin"){
            $state.go('app.toggle');
        }
        else{
            $scope.msg="Please Enter the valid Details";
        }
    };

    $scope.update=function(){
        $scope.msg1="Successfully Updated";
    };
   
});
    