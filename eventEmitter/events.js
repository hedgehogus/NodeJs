// pattern pubsub

const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('start', message => {
    console.log(message);
})


/*
emitter.once('start', message => {  // subscribes on event only one time
    console.log(message); 
})
*/

emitter.emit('start', 'Started 1');
emitter.emit('start', 'Started 2');

emitter.removeAllListeners();

emitter.emit('start', 'Started 3');

