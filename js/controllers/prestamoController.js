// Controlador para la pagina que gestiona los prestamos de los dispositivos

app
		.controller(
				'prestamoCtrl',
				[
						'$scope',
						'$mdBottomSheet',
						'dispositivoService',
						'$cookies',
						function($scope, $mdBottomSheet, dispositivoService,
								$cookies) {

							$scope.nuevoPrestamo = {};
							// $scope.dispositivoSeleccionado = {};
							// $scope.mostrado = false;
							$scope.hoy = new Date();
//							Función para listar los dispositivos
							$scope.listar = function() {
								dispositivoService
										.listar()
										.success(
												function(data) {
													if (data.dispositivoWS.length > 0) {
														$scope.dispositivos = data.dispositivoWS;
													} else {
														$scope.dispositivos = data;
													}
												})
							}

							$scope.listar();
							
//							Función para seleccionar el dispositivo con el que se quiere crear la reserva
							$scope.seleccionarDispositivo = function(
									dispositivo) {
								$scope.dispositivoSeleccionado = angular
										.copy(dispositivo);
								// $scope.mostrado = true;

							};
							
//							Función para solicitar un nuevo préstamo
							$scope.solicitarPrestamo = function(nuevoPrestamo) {

								nuevoPrestamo.idDispositivo = $scope.dispositivoSeleccionado.idDispositivo;
								nuevoPrestamo.username = $cookies.nombreUsuario;

								var dateObj = nuevoPrestamo.fechaInicialPrestamo;
								var month = dateObj.getMonth() + 1;
								var day = dateObj.getDate();
								var year = dateObj.getFullYear();

								if (day.toString().length < 2) {
									day = "0" + day;
								}
								if (month.toString().length < 2) {
									month = "0" + month;
								}
								nuevoPrestamo.fechaInicialPrestamo = day + "-"
										+ month + "-" + year + "-"
										+ nuevoPrestamo.hora;

								nuevoPrestamo.fechaFinalPrestamo = day + "-"
										+ month + "-" + year + "-"
										+ nuevoPrestamo.hora;

								dispositivoService
										.solicitarPrestamo(nuevoPrestamo)
										.success(
												function(data) {
													if (data == "Prestamo solicitado correctamente") {
														$scope.listar();
														alert("Solicitud de reserva creada con éxito")
													} else {
														if (data == "org.hibernate.exception.ConstraintViolationException: Could not execute JDBC batch update") {
															alert("No puede reservar el mismo dispositivo, ya que tiene una solicitud de reserva con este..")
														} else {
															alert(data);
														}

													}
												})
							}

						} ]);