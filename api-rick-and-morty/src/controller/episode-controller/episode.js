const RickEpisode = require('../../models/episode-model/episode')
const { setResponse, getErrorResponse } = require("../../utils/httpResponse")
const { verifyConditionString, verifyConditionNumber } = require('../../utils/verifier')

class RickController {
    static async listEpisodes (req, res) {
        try {
            const { page } = req.queryParams

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page is invalid")
            }

            const rick = await RickEpisode.listEpisodes(page)
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async episodeByName (req, res) {
        try {
            const { name } = req.queryParams

            if(verifyConditionString(name)){
                throw setResponse(404, "Name is required or invalid")
            }

            const rick = await RickEpisode.searchEpisodeByName(name)
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async episodeByTag (req, res) {
        try {
            const { tag } = req.queryParams

            const rick = await RickEpisode.searchEpisodeByTag(tag)
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }
}

module.exports = RickController