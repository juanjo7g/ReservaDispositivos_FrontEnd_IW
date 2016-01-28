app.controller('prestamoCtrl', [ '$scope', '$mdBottomSheet',
		'dispositivoService',
		function($scope, $mdBottomSheet, dispositivoService) {

			// $scope.dispositivoSeleccionado = {};
			// $scope.mostrado = false;

			$scope.listar = function() {
				dispositivoService.listar().success(function(data) {
					if (data.dispositivoWS.length > 0) {
						$scope.dispositivos = data.dispositivoWS;
					} else {
						$scope.dispositivos = data;
					}
				})
			}

			$scope.listar();

			$scope.seleccionarDispositivo = function(dispositivo) {
				$scope.dispositivoSeleccionado = angular.copy(dispositivo);
				// $scope.mostrado = true;

			};

		} ]);