const http = require('http')
const urlEncode = require('url')
const qs = require('querystring')

const characters = require('./src/routes/characters')
const locations = require('./src/routes/location')
const episodes = require('./src/routes/episodes')


const server = http.createServer((request, response) => {
    const { url } = request
    const {pathname, query} = urlEncode.parse(url)
    const queryParsed = qs.parse(query)
    request.queryParams = queryParsed 

    switch (true) {
        case pathname.startsWith('/cha') :
            characters[pathname](request, response)
            break;

        case pathname.startsWith('/loc') :
            locations[pathname](request, response)
            break;

        case pathname.startsWith('/epi') :
            episodes[pathname](request, response)
            break;

        default:
            
    }
})

server.listen(3000, () => console.log('server listening on port 3000'))

