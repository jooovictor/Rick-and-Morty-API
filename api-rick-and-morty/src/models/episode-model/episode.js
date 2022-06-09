const rickApi = require ('../../config/rick-api')

class RickEpisode {
    
    static async listEpisodes (page) {
        const options = {
            params: {
                page: page || 1
            }
        } 

        const { data } = await rickApi.get('/episode', options)
        return data
    }

    static async searchEpisodeByName (name) {
        const options = {
            params: {
                name
            }
        } 

        const { data } = await rickApi.get('/episode', options)
        return data
    }

    static async searchEpisodeByTag (tag) {
        const options = {
            params: {
                episode: tag
            }
        } 

        const { data } = await rickApi.get('/episode', options)
        return data
    }
}

module.exports = RickEpisode
