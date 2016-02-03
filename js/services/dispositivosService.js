// Servicio que gestiona las operaciones sobre los dispositivos.

app
		.service(
				'dispositivoService',
				function($http) {

					// Servicio para listar todos los dispositivos del sistema.
					this.listar = function() {
						return $http({
							method : 'GET',
							url : 'http://localhost:8080/ReservaDispositivos_WS_IngWeb/rest/Dispositivo/listar'
						})
					}

					// Servicio para solicitar el prestamo.
					this.solicitarPrestamo = function(nuevoPrestamo) {
						
						console.log(nuevoPrestamo);
						
						return $http({
							method : 'POST',
							url : 'http://localhost:8080/ReservaDispositivos_WS_IngWeb/rest/Prestamo/solicitar',
							params : {
								idDispositivo : nuevoPrestamo.idDispositivo,								
								username : nuevoPrestamo.username,
								fechaInicialPrestamo : nuevoPrestamo.fechaInicialPrestamo,
								fechaFinalPrestamo : nuevoPrestamo.fechaFinalPrestamo,
							}
						})
					}

				});