const http = require('http')
const urlEncode = require('url')
const qs = require('querystring')

const characters = require('./src/routes/characters')
const place = require('./src/routes/places')
const episode = require('./src/routes/episodes')


const server = http.createServer((request, response) => {
    const { url } = request
    const {pathname, query} = urlEncode.parse(url)
    const queryParsed = qs.parse(query)
    request.queryParams = queryParsed 

    characters[pathname](request, response)

})

server.listen(3000, () => console.log('server listening on port 3000'))

