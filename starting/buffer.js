 const buffer = Buffer.from('Node.js', 'ascii'); // second parameter => encoding format (utf8 by default)
// const buffer = Buffer.from([0x4e, 0x6f, 0x64, 0x65, 0x2e, 0x6a, 0x73]);

console.log(buffer); // <Buffer 4e 6f 64 65 2e 6a 73> symbols in utf8
console.log(buffer.toString());

// console.log(buffer.toJSON());
// console.log(buffer[0]);

buffer[0] = 77;

buffer.write('Fir');
console.log(buffer.toString());
console.log(buffer.length);

console.log(buffer.slice(0, 4).toString());
console.log(buffer.length);

const newBuffer = Buffer.alloc(256, 'Node.js') // allocate
console.log(newBuffer);
console.log(newBuffer.toString());
console.log(newBuffer.length);