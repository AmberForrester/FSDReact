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

const serveFile = async (filePath, contentType, response) => {

    try { // This code makes application aware of more types of data. 

        const rawData = await fsPromises.readFile(filePath, !contentType.includes('images') ? 'utf8' : '');

        const data = contentType === 'application/json' ? JSON.parse(rawData): rawData;

        response.writeHead(

            filePath.includes('error_404.html') ? 404: 200,{'content-Type':contentType} 
        );

        response.end(contentType==='application/json' ? JSON.stringify(data): data);

    }

    catch(err) {

        console.log(err);
        myEmitter.emit('mylogs', `${err.name} \t ${err.message}` , 'errorLogs.txt');
        response.statusCode = 500; //server error code 
        response.end();

    }
}

// http server: 
const myServer = http.createServer((req,res) =>{

    console.log(req.url, req.method); // Create the server request within the curly brackets, 1.request the url, 2.request the type. 

    myEmitter.emit('mylogs',  `${req.url} \t ${req.method}`, 'log.txt');

    let filePath;

    /* if (req.url === '/' || req.url === 'index.html')

        {
            res.statusCode=200;
            res.setHeader('Content-Type', 'text/html');
            filePath = path.join(__dirname, 'views', 'index.html');
            fs.readFile(filePath, 'utf8', (err, data) => {res.end(data)});
        } //This break of code is not maintainable, because we will need to continue writing all the if statements.  */

    // Instead, lets try writing switch statements:
    /* switch(req.url) {

        case '/';

        res.statusCode=200;
            res.setHeader('Content-Type', 'text/html');
            filePath = path.join(__dirname, 'views', 'index.html');
            fs.readFile(filePath, 'utf8', (err, data) => {res.end(data)});

        break;
        
        }   //This break of code is not maintainable, because we will need to keep writing the case '/' & break repeatedly.  */

    // Write a better functioning code that serves different paths, and extensions:
    const myExtension = path.extname(req.url);
    let contentType;

    switch(myExtension) {

        case '.css':
            contentType = 'text/css'

        case '.js':
            contentType = 'text/javascript'

        case '.html':
            contentType = 'text/html'

        case '.jpg':
            contentType = 'text/jpeg'

        case '.png':
            contentType = 'text/png'

        case '.txt':
            contentType = 'text/plain'

        default:
            contentType = 'text/html'

    } 

    filePath =

    contentType === 'text/html' && req.url ==='/'

    // Instead of writing if/else statements you can create Ternary Statements then complete chaining:

    ? path.join(__dirname, 'views', 'index.html')

    // Then with chaining there is true or false:

    :contentType === 'text/html' && req.url.slice(-1)//-1 is telling it to pick up the last URL no matter what. 
    === '/'

    // Creating the checks:

    ? path.join(__dirname, 'views', 'index.html')

    :contentType === 'text/html'

    ? path.join(__dirname, 'views', req.url)

    : path.join(__dirname, req.url); // This line of code instructs that no matter what pick up the directory name + URL. 

    if (!myExtension&&req.url.slice(-1) !== '/')

        filePath += '.html' // This part of the code starting with if means that if someone doesnt have the extension it will automatically print html, and serve them the page. 
    
    //console.log(filePath);

    const fileExist = fs.existsSync(filePath);

    if (fileExist) {
        // create a function to serve the page and get the user the file. 

        serveFile(filePath, contentType, res);
    }

    else { //Within else I want control, if the file is not present, I want to reroute them to my own error page:

        switch(path.parse(filePath).base) {

            case 'old-page.html':
                res.writeHead(301, {'Location': '/new-page.html'}); //Header is Location and page to server is /new-page.html
                res.end();

                break;

            case 'www-page-html':
                res.writeHead(301, {'Location': '/'}); 
                res.end();

                break;
            default: 
        }

        console.log(path.parse(filePath)); //parse allowing you to show objects like the root, dir, base:'in html'(showing the file name), ext, name - giving alot of background information. 

        //Error codes: 100 info | 200 successfull | 300 redirect | 400 error | 500 server. 301 = redirect, 404 = server cannot find the requested resource(url)
    }

    serveFile(path.join(__dirname, 'views', 'error_404.html'), 'text/html', res);
    // If page doesnt exist we want to throw this error page. 

    
}

);

// Creating the listener: requires 2 parameters, 1.Port#, 2.Host names. 
myServer.listen(myPORT, () => console.log(`My server is using port ${myPORT}`));








// Test the code, >cd .\web-server\, >npm run dev, within the browser type the url to see the get request getting logged in the console, http://localhost:3600


//myEmitter.on('mylogs', (msg)=>myEventLogs(msg));
 //   myEmitter.emit('mylogs', 'log item emitted' );

