const fs = require('fs');
const path = require('path');

function public(req, res) {
    const extention = path.extname(req.url); // /css/app.css -> .css
    const filename = req.url.slice(1);
    let contentType = '';

    switch (extention) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        default:
            contentType = 'text/plain';    
    }

    // res.writeHead(200, {'Content-Type': contentType});
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

    // const stream = fs.createReadStream(path.join(__dirname, '..', 'public', req.url));
    const stream = fs.createReadStream(path.resolve('public', filename));

    stream.pipe(res);
    stream.on('error', error => {
        if (error.code === 'ENOENT') {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
        } else {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(error.message);
        }
    });
}

module.exports = public;