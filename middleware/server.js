
const path = require('path');
const myPORT = process.env.PORT || 3400;

const express = require('express');
const app = express()
const {logger} = require('./myCustomMiddleware/eventLog');


const cors = require('cors');


//Custom Middleware
app.use(logger);

// Create a whitelist "allowed list" that is R/T calling URL's because we want to restrict where the request comes to server.
const whiteList = ["https://www.google.com",  "http://127.0.0.1:3400", "http://127.0.0.1:5500"];
// For the URL's mentioned about let the source communicate with the server. 


const corsOptions = {

   origin: (origin, callback) => {

                  // -1 allows whitelist to pick up URL and allow it 
      if (whiteList.indexOf(origin) !== -1 || !origin) {
         
         // if no error, then whatever URL coming in allow to be true
         callback(null, true);
      }

      else {

         callback(new Error ("Not allowed by CORS"));
      }
   },

   optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
// What was done using const corsOptions: created an object with key:value, key:value. The origin = key, value = code created within the () => {}.




// Middleware: define these routes before other routes -

// Built in Middleware - This piece of code is used in context of data from a form, posting that data from the form to the server, Middleware is doing this:
app.use(express.urlencoded({extended:false})); 
      //content type       //bring me the data

// Bringing JSON Middleware:
app.use(express.json());

// Static files - (like css, data, images, and views), except the HTML in our project. We will use this code to tell Middleware to handle static files:
app.use(express.static(path.join(__dirname, '/public')));
// This code is saying "go get these static files from the public folder".

app.get('^/$|/index(.html)?', (req, res) => {
   //res.sendFile('./views/index.html', { root: __dirname });
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/my_new_page(.html)?', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'my_new_page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
   res.redirect(301, '/new-page.html'); //302 by default
});

app.get('/*',(req, res)=>{
   res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
   });

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
   console.log('attempted to load hello.html');
   next()
}, (req, res) => {
   res.send('Hello World!');
});


// chaining route handlers
const one = (req, res, next) => {
   console.log('one');
   next();
}

const two = (req, res, next) => {
   console.log('two');
   next();
}

const three = (req, res) => {
   console.log('three');
   res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);


//listner
app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));