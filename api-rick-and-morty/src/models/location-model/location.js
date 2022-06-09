const rickApi = require ('../../config/rick-api')

class RickLocation {
    static async locationList (page) {
        const options = {
            params: {
                page: page || 1
            }
        }

        const { data } = await rickApi.get('/location', options)
        return data
    }

    static async locationListByType (type, page) {
        const options = {
            params: {
                type,
                page: page || 1
            }
        }

        const { data } = await rickApi.get('/location', options)
        return data
    }

    static async locationListByDimension (dimension, page) {
        const options = {
            params: {
                dimension,
                page: page || 1
            }
        }

        const { data } = await rickApi.get('/location', options)
        return data
    }

    static async seachLocationByName(name){
        const options = {
            params: {
                name
            }
        }

        const { data } = await rickApi.get('/location', options)
        return data
    }
}

module.exports = RickLocation