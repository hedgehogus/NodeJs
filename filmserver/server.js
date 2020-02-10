const http = require('http');
// const { public, home, search, notFound } = require('./routes');
const routes = require('./routes');

const render = require('./lib/render');

http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {
        routes.public(req, res);
    } else if (req.url === '/') {
        routes.home(req, res);
    } else if (req.url.startsWith('/search')) {
        routes.search(req, res);
    } else {
        routes.notFound(req, res);
    }
}).listen(5000, () => console.log('server is working'));