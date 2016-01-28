'use strict';
var app = angular.module('reservasApp',
		[ 'ngMaterial', 'ngRoute', 'ngCookies' ]);

app.config(function($mdIconProvider, $mdThemingProvider, $routeProvider,
		$locationProvider, $httpProvider) {

	// Register the user `avatar` icons
	$mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
	$mdIconProvider.icon("share", "./assets/svg/share.svg", 24);

	// $mdThemingProvider
	// .theme('default')
	// .primaryPalette('green')
	// .accentPalette('pink')
	// .warnPalette('red')
	// .backgroundPalette('green')

	$routeProvider.when('/login', {
		templateUrl : 'views/login.html',
		controller : 'loginCtrl'
	}).when('/usuarios', {
		templateUrl : 'views/usuarios.html',
		controller : 'usuariosCtrl'
	}).when('/prestamo', {
		templateUrl : 'views/prestamo.html',
		controller : 'prestamoCtrl'
	}).otherwise({
		redirectTo : '/login'
	});
});


app.run(function($rootScope, $cookies, $location) {
	$rootScope.$on('$routeChangeStart', function() {
		if(typeof($cookies.nombreUsuario) == 'undefined'){
			$location.url('/login');
		}else{
			if($cookies.rolUsuario == '1'){
				$location.url('/usuarios');
			}else{
				$location.url('/prestamo');
			}
		}
	});
});

