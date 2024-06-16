const myEventLogs = require('./eventLog');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();

// Bring in common js modules:
const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

// When creating a web server, assign a port:
const myPORT = process.env.PORT || 3600;

const myServer = http.createServer((req,res) =>{

    console.log(req.url, req.method); // Create the server request within the curly brackets, 1.request the url, 2.request the type. 
})

// Creating the listener: requires 2 parameters, 1.Port#, 2.Host names. 
myServer.listen(myPORT, () => console.log(`My server is using port ${myPORT}`));

// Test the code, >cd .\web-server\, >npm run dev, within the browser type the url to see the get request getting logged in the console, http://localhost:3600


//myEmitter.on('mylogs', (msg,) => myEventLogs(msg));

