const myEventLogs = require('./eventLog');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('mylogs', (msg) => myEventLogs(msg));

setTimeout(

    ()=>{

        myEmitter.emit('mylogs', 'log item emitted');
    
    }, 2000);