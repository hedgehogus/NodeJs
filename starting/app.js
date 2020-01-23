// global.console.log(global);

// var messae ='hello';
// console.log(message);

/* console.log(__dirname);
 console.log(__filename);  //full file path
*/

/* 
console.log(process.execPath);  // node directory path
console.log(process.version);  // node version
console.log(process.platform); // win32 
*/

/* 
console.log(process.argv) // returns array [node path, this file path];
const message = process.argv[2];
console.log(message); 
*/
// print to console => node app Hello world =>  [node path, this file path, 'Hello', 'world'] 

// node app --message "Hello world" or  node app -m "Hello world"  => set flag to variable 
// node app -m Hello -n Oleg
/*
console.log(process.argv);

function getValue (flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const message = getValue('-m') || 'Hello';
const name = getValue('-n') || 'friend';

console.log(`${message}, ${name} !`);
*/

//standart input and standart output

const stdin = process.stdin;
const stdout = process.stdout;

stdout.write('Hi what is your name?\n');

stdin.on('data', (input) => {
    const name = input.toString().trim();
    const reversedName = name.split('').reverse().join('');
    stdout.write(`\n${name}, your reversed name is: ${reversedName}`);
    process.exit();
});

process.on('exit', () => stdout.write('\n\nHave a good day'));