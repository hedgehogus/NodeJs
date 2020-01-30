const http = require('http');

/*
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello node.js');
});
*/

// server.listen(5000, () => console.log('server is working'));

const html = `
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Node.js basics</title>
            <link rel="stylesheet" href="app.css">
        </head>
        <body>
            <h1 class='red'>Node.js basics</h1>
            <button>click me</button>
            <script src="app.js"></script>
        </body>
    </html>
`;

const css = `.red {
    color: red;
}`

const js = `
    const button = document.querySelector('button'); 
    button.addEventListener('click', event => alert('Node.js hello'));
`

http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
            break;
        case '/app.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(css);
            break;
        case '/app.js':
            res.writeHead(200, {'Content-Type': 'text/js'});
            res.end(js);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 not found');
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(5000, () => console.log('server is working'));