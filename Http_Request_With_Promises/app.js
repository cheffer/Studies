const http = require('http');
const https = require('https')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    https.get('https://dummyjson.com/comments?limit=10&skip=10&select=body,postId', (response) => {
        let data = '';

        response.on('data', chunk => {
            data += chunk;
        });

        response.on('end', () => {
            const post = JSON.parse(data);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(JSON.stringify(post));
        });
    }).on('error', (e) => {
        console.log('Error: ', e);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});