const http = require('http')

let count = 0
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Set Content-Type header
    res.write(`Hello, this is our First page, ${++count}`)
    if (req.url === '/')
        res.write("This is my home page")
    else if (req.url === '/about')
        res.write("This is my about page")
    else
        res.write(`
            <h1>Oops!</h1>
            <p>We can't find your page</p>
            <a href="/">Back home</a>
        `)
    res.end()
})

server.listen(3000)
