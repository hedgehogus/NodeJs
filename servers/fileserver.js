const http = require('http');
const fs = require('fs');
const path = require('path');

function handleError(error,res) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(error.message);
}

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, html) => {
            if (error) {
                return handleError(error, res);
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);

        })
    } else if (req.url.match(/.css$/)) {
        fs.readFile(path.join(__dirname, 'public', req.url), (error, css) => {
            if (error) return handleError(error, res);

            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(css);

        })
    } else if (req.url.match(/.png$/)) {
        const stream = fs.createReadStream(path.join(__dirname, 'public', req.url))

        stream.on('error', error => handleError(error, res))
         
        res.writeHead(200, {'Content-Type': 'image/png'});
        stream.pipe(res);

    } else if (req.url.match(/.js$/)) {
        const stream = fs.createReadStream(path.join(__dirname, 'public', req.url))

        stream.on('error', error => handleError(error, res));
        
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        stream.pipe(res);       
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 not found');
    }

}).listen(5000, () => console.log('server is working'));