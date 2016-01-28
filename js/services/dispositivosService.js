app.service('dispositivoService', function($http) {

	this.listar = function() {
		return $http({
			method : 'GET',
			url : 'http://localhost:8080/ReservaDispositivos_WS_IngWeb/rest/Dispositivo/listar'
		})
	}

});