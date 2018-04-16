// write your code here
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    let url = req.url
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello World');
    console.log('url is:' + url);
});

server.listen(port, hostname,() => {
    console.log('Server started on port ' + port);
});