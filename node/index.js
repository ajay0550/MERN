const http = require('http');

const server = http.createServer((req, res) => {
    // res.end('Response from Http Server');
    if(req.url === '/' && req.method === 'POST') {
        res.end('This is Home')
    } else if (req.url === '/login') {
        res.end('Response from Login')
    } else if (req.url === '/signup') {
        res.end('Response from Signup');
    } else {
        res.end('Response for your Request')
    }

})

server.listen(3000, () => console.log('Server is running'));