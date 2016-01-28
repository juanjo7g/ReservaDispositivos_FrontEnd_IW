app.controller('loginCtrl', [
		'$scope',
		'$mdBottomSheet',
		'$location',
		'usuario',
		'$cookies',
		function($scope, $mdBottomSheet, $location, usuario, $cookies) {

			$scope.autenticar = function() {
				usuario.autenticar($scope.nombreUsuario, $scope.contrasena)
						.success(function(data) {
							if (data == '') {
								alert('Error en el logueo');
							} else {
								$cookies.nombreUsuario = $scope.nombreUsuario;
								$cookies.rolUsuario = data;
								if (data == '1') {
									alert('Eres administrador');
									$location.path("/usuarios");
								} else {
									alert('Eres estudiante');
									$location.path("/prestamo");
								}
							}
						})
			}

		} ]);