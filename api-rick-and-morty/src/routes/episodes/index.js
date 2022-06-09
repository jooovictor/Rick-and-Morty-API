const RickController = require('../../controller/episode-controller/episode')

module.exports = {
    '/episodes' : RickController.listEpisodes,
    '/episode-by-name' : RickController.episodeByName,
    '/episode-by-tag' : RickController.episodeByTag
}

/*
* Episódios:
* Listar episódio e permitir o uso de PAGINAÇÃO
* Buscar episódio por nome
* Buscar episódio pela tag "episode". Ex.: { "episode":"S01E01" }
*/