const RickController = require("../../controller/location-controller/location")

module.exports = {
    '/locations' : RickController.locationList,
    '/locations-by-type' : RickController.locationListByType,
    '/locations-by-dimension' : RickController.locationListByDimension,
    '/location-by-name' : RickController.searchLocationByName
}

/*

* Listar Locais e permitir o uso de PAGINAÇÃO e o uso de filtros. Filtros que devem
estar disponíveis:
* Listar locais por tipo
* Listar locais por dimensão
* Buscar locais por nome

*/