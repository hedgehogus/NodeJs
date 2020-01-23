const fs = require('fs');

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');

fs.readFile(filename, 'utf-8', (error, data) => {  
    if (error) {
        console.log("there is no such file");
        return;
    };

    console.log(data.toString());
})

// console -> node read-file -f note.md