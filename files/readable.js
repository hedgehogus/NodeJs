const fs = require('fs');

const stream = fs.createReadStream('lrem.txt', 'utf-8');

let data = '';

stream.on('data', part => {
    console.log(part.length);
    data += part;
});

stream.on('end', () => console.log('end', data.length));

stream.on('error', error => console.log('Error here:', error.message));