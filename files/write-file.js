const fs = require('fs');

/* fs.writeFile('note.txt', 'Hello Node js new', error => {
    if (error) throw error;

    console.log('file created');
}) */ 

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');
const content = getValue('-c');

fs.appendFile(filename, content, error => {
    if (error) throw error;

    console.log('file updated');
})


// console -> node write-file -f note.md -c "# Node js"