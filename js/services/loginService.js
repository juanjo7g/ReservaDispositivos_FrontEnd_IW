// Servicio que gestiona el inicio de sesion de los usuarios.

app.service('usuario', function($http) {

	this.autenticar = function(user, pws) {
		return $http({
			method : 'GET',
			url : 'http://localhost:8080/ReservaDispositivos_WS_IngWeb/rest/Usuario',
			params : {
				username : user,
				password : pws
			}
		})
	}

});