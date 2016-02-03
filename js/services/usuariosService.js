// Servicio que gestiona las transacciones sobre los usuarios del sistema.

app
		.service(
				'usuarioService',
				function($http) {

					this.listar = function() {
						return $http({
							method : 'GET',
							url : 'http://localhost:8080/ReservaDispositivos_WS_IngWeb/rest/Usuario/listar'
						})
					}

					this.crear = function(nuevoUsuario) {
						return $http({
							method : 'POST',
							url : 'http://localhost:8080/ReservaDispositivos_WS_IngWeb/rest/Usuario/crear',
							params : {
								username : nuevoUsuario.username,
								password : nuevoUsuario.password,
								passwordConfirmacion : nuevoUsuario.passwordConfirmacion,
								nombre : nuevoUsuario.nombre,
								apellido : nuevoUsuario.apellido,
								tipoDocumento : nuevoUsuario.tipoDocumento,
								nroDocumento : nuevoUsuario.nroDocumento,
								correo : nuevoUsuario.correo,
								idRol : nuevoUsuario.idRol,
								telefono : nuevoUsuario.idRol,
								celular : nuevoUsuario.celular
							}
						})
					}

				});