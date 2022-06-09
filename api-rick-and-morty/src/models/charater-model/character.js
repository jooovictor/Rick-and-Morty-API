const rickApi = require ('../../config/rick-api')
const fs = require("fs")

class RickCharacter {

    static async listCharacters (page) {
        const options = {
            params: {
                page: page || 1
            }
        }
        
        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async listCharactersByStatus (status, page) {
        const options = {
            params: {
                status,
                page: page || 1
            }
        }
    
        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async listCharactersBySpecie(species, page){
        const options = {
            params: {
                species,
                page: page || 1
            }
        }
        const { data } = await rickApi.get('/character', options)
        return data
    }
    
    static async listCharactersByGender(gender, page){
        const options = {
            params: {
                gender,
                page: page || 1
            }
        }
        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async listCharactersByOrigin(page, origin){
        const options = {
            params: {
                page: page || 1,
            }
        }

        const info = await rickApi.get('/character', options)
        const result = info.data.results
        const filter = result.filter((char) => {
            if (char.origin.name.toLowerCase().includes(origin)) {
                return char
            }
        })
        return filter
    }

    static async searchCharacterByName(name, page) {
        const options = {
            params: {
                name,
                page: page || 1
            }
        }
        const { data } = await rickApi.get(`/character`, options)
        return data
    }

    static async searchCharacterById(id) {
        const { data } = await rickApi.get(`/character/${id}`)
        return data
    }

    static async saveCharacterById(character) {
        const getFileName = character.name.split(" ").join("-").toLowerCase()+'.json'
        return await fs.writeFile(`./tmp/${getFileName}`, JSON.stringify(character), err => {
            if (err) {
                console.log(err)
            }
        })
    }
}

module.exports = RickCharacter