const RickCharacter = require('../../models/charater-model/character')
const { setResponse, getErrorResponse } = require("../../utils/httpResponse")
const { verifyConditionString, verifyConditionNumber } = require('../../utils/verifier')

class RickController{
    static async listCharacters(req, res) {
        try {
            const { page } = req.queryParams
            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page is invalid")
            }

            const rick = await RickCharacter.listCharacters(page)

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
            const { status, page } = req.queryParams

            if(status && status !== 'alive' && status !== 'dead' && status !== 'unknown'){
                throw setResponse(404, "Status must be a alive, dead or unknown")
            } 

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page must be a number")
            }
            
            const rick = await RickCharacter.listCharactersByStatus(status, page)
            
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
            const { species, page } = req.queryParams
            if(verifyConditionString(species)){
                throw setResponse(400, "Specie is required or invalid")
            }

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page must be a number")
            }
            
            const rick = await RickCharacter.listCharactersBySpecie(species, page)
            
            
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
            const { gender, page } = req.queryParams
            if(verifyConditionString(gender)){
                throw setResponse(400, "Gender is required or invalid")
            }

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page must be a number")
            }
            
            const rick = await RickCharacter.listCharactersByGender(gender, page)
            
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
            const { origin, page } = req.queryParams
            if(verifyConditionString(origin)){
                throw setResponse(400, "Origin is required or invalid")
            }

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page must be a number")
            }
        
            const rick = await RickCharacter.listCharactersByOrigin(page, origin)
            
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
            const { name, page } = req.queryParams
            if(verifyConditionString(name)){
                throw setResponse(400, "Name is required or invalid")
            }

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page must be a number")
            }
            
            const rick = await RickCharacter.searchCharacterByName(name, page)
            
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
            
            const rick = await RickCharacter.searchCharacterById(id)
            
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async saveCharacterById(req, res){ 
        try {
            const {id} = req.queryParams
            if(verifyConditionNumber(id)){
                throw setResponse(400, "Id is required or invalid")
            }

            const character = await RickCharacter.searchCharacterById(id)
            await RickCharacter.saveCharacterById(character)

            res.writeHead(200)
            res.end(`personagem ${character.name} salvo com sucesso`)
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
        
    }
}

module.exports = RickController