const rickApi = require ('../config/rick-api')

class Rick {

    static async listCharacters (page) {
        const options = {
            params: {
                page: page || 1
            }
        }
        
        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async listCharactersByStatus (status) {
        const options = {
            params: {
                status
            }
        }

        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async listCharactersBySpecie(species){
        const options = {
            params: {
                species
            }
        }
        const { data } = await rickApi.get('/character', options)
        return data
    }
    
    static async listCharactersByGender(gender){
        const options = {
            params: {
                gender
            }
        }
        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async listCharactersByOrigin(origin){
        const options = {
            params: {
                origin
            }
        }
        const { data } = await rickApi.get('/character', options)
        return data
    }

    static async searchCharacterByName(name) {
        const options = {
            params: {
                name
            }
        }
        const { data } = await rickApi.get(`/character`, options)
        return data
    }

    static async searchCharacterById(id) {
        const { data } = await rickApi.get(`/character/${id}`)
        return data
    }
}

module.exports = Rick