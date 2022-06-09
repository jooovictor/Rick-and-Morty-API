const RickLocation = require('../../models/location-model/location')
const { setResponse, getErrorResponse } = require("../../utils/httpResponse")
const { verifyConditionNumber, verifyConditionString } = require('../../utils/verifier')


class RickController {

    static async locationList (req, res) {
        try {
            const { page } = req.queryParams

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page is invalid")
            }

            const rick = await RickLocation.locationList(page)
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async locationListByDimension (req, res) {
        try {
            const { dimension, page } = req.queryParams

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page is invalid")
            }

            if(verifyConditionString(dimension)) {
                throw setResponse(400, "Dimension is required or invalid")
            }

            const rick = await RickLocation.locationListByDimension(dimension, page)
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async locationListByType (req, res) {
        try {
            const { type, page } = req.queryParams

            if(verifyConditionNumber(page)){
                throw setResponse(400, "Page is invalid")
            }

            if(verifyConditionString(type)) {
                throw setResponse(400, "Dimension is required or invalid")
            }

            const rick = await RickLocation.locationListByType(type, page)
            res.writeHead(200)
            res.end(JSON.stringify(rick))
        } catch (error) {
            const { status, message } = getErrorResponse(error)
            res.writeHead(status)
            res.end(message)
        }
    }

    static async searchLocationByName(req, res) {
        try {
            const { name } = req.queryParams

            if(verifyConditionString(name)) {
                throw setResponse(400, "Dimension is required or invalid")
            }

            const rick = await RickLocation.seachLocationByName(name)
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