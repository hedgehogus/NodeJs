const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('lorem.txt', 'utf-8');
const output = fs.createWriteStream('lorem.md.gz');
//const output2 = fs.createWriteStream('lorem2.md');
const gzip = zlib.createGzip()

// let data = '';

// input.pipe(output2);

// duplex stream (used for transformation)
input.pipe(gzip).pipe(output);

input.on('data', part => {
    // console.log(part.length);
    // data += part;
    output.write(part);
});

input.on('end', () => console.log('end'));

input.on('error', error => console.log('Error here:', error.message));

class ReadStream {
    pipe(stream) {
        this.on('data', part => stream.write(part));
        return stream; // for duplex stream => we can put another write stream
    }
}

// duplex stream

