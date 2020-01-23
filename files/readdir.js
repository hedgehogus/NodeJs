const fs = require('fs');

console.log('Reading directory');

// const contents = fs.readdirSync(__dirname);

fs.readdir(__dirname, (error, contents) => {
    if (error) throw error;

    console.log(contents);
})

// console.log(contents);
console.log('Finished reading');

// syncronous - for reading configurations file
// asyncronous - recomended in all other situations