const Rick = require('../models/rick')
const { setResponse, getErrorResponse } = require("../utils/httpResponse")
const { verifyConditionString, verifyConditionNumber } = require('../utils/verifier')

class RickController{
    static async listCharacters(req, res) {
        try {
            const { page } = req.queryParams
            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page is invalid")
            }

            const rick = await Rick.listCharacters(page)

            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async listCharactersByStatus (req, res) {
        try {
            const { status } = req.queryParams
            if(status && status !== 'alive' && status !== 'dead' && status !== 'unknown'){
                throw setResponse(400, "Status must be a alive, dead or unknown")
            }
            
            const rick = await Rick.listCharactersByStatus(status)
            
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async listCharactersBySpecie (req, res) {
        try {
            const { species } = req.queryParams
            if(verifyConditionString(species)){
                throw setResponse(400, "Specie is required or invalid")
            }
            
            const rick = await Rick.listCharactersBySpecie(species)
            
            
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async listCharactersByGender (req, res) {
        try {
            const { gender } = req.queryParams
            if(verifyConditionString(gender)){
                throw setResponse(400, "Gender is required or invalid")
            }
            
            const rick = await Rick.listCharactersByGender(gender)
            
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async listCharactersByOrigin (req, res) {
        try {
            const { origin } = req.queryParams
            if(verifyConditionString(origin)){
                throw setResponse(400, "Origin is required or invalid")
            }
            
            const rick = await Rick.listCharactersByOrigin(origin)
            
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async searchCharacterByName (req, res) {
        try {
            const { name } = req.queryParams
            if(verifyConditionString(name)){
                throw setResponse(400, "Name is required or invalid")
            }
            
            const rick = await Rick.searchCharacterByName(name)
            
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async searchCharacterById (req, res) {
        try {
            const { id } = req.queryParams
            if(verifyConditionNumber(id)){
                throw setResponse(400, "Id is required or invalid")
            }
            
            const rick = await Rick.searchCharacterById(id)
            
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