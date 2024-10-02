const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

//initialize object
const MyEmitter = new MyEmitter();

//Add listeners for the log events
MyEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //emit the log event
    MyEmitter.emit('log', 'log event emitted');
}  , 2000);
