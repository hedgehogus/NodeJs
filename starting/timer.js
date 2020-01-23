const waitTimeout = 5000;
const waitInterval = 1000;

let currentTime = 0;
let percent = 0;

function print(percent) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`loading ... ${percent}%`);
}

process.stdout.write('loading ...');

setInterval(() => {
    currentTime +=waitInterval;
    percent = Math.floor(currentTime / waitTimeout * 100)
    // process.stdout.write(percent.toString());
    print(percent);
}, waitInterval);

setTimeout(() => {
    print(100);
    process.stdout.write('\n ...ready');
    process.exit();
}, waitTimeout);