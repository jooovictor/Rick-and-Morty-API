const RickController = require('../../controller/character-controller/character')

module.exports = {
    '/characters' : RickController.listCharacters,
    '/characters-status': RickController.listCharactersByStatus,
    '/characters-specie': RickController.listCharactersBySpecie,
    '/characters-gender': RickController.listCharactersByGender,
    '/characters-origin': RickController.listCharactersByOrigin,
    '/character-by-name': RickController.searchCharacterByName,
    '/character-by-id': RickController.searchCharacterById,
    '/character-save-by-id': RickController.saveCharacterById
}

/*
* Listar os personagens por espécie
* Listar personagens por origem
* Listar personagens por gênero
* Buscar personagem por nome
* Buscar personagem por id
* Buscar personagem por gênero
*/