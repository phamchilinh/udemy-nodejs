const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //router
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        return res.end('Home');
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', 'DUMMY');
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header></header>');
    res.write('<body>Hello</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);