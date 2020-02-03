const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    switch(req.method) {
        case 'GET':
            const stream = fs.createReadStream(path.join(__dirname, 'public', 'form.html'));
            res.writeHead(200, {'Content-Type': 'text/html'});
            stream.pipe(res);
            break;            
        case 'POST': 
            let body = '';

            req.setEncoding('utf-8');
            req.on('data', data => body += data);
            req.on ('end', () => {
                console.log(body);
            })
            break;    
    }
}).listen(5000, () => console.log('server is working'));