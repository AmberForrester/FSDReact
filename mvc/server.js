const path = require('path');
const myPORT = process.env.PORT || 3400;

const express = require('express');
const app = express()
const {logger} = require('./myCustomMiddleware/eventLog');

//import errorHandler.js module into server.js:
const errorHandler = require('./myCustomMiddleware/errorHandler');


const cors = require('cors');
const corsOptions = require('./controllers/corsController');


//Custom Middleware
app.use(logger);



app.use(cors(corsOptions));
// What was done using const corsOptions: created an object with key:value, key:value. The origin = key, value = code created within the () => {}.



// Middleware: define these routes before other routes -

// Built in Middleware - This piece of code is used in context of data from a form, posting that data from the form to the server, Middleware is doing this:
app.use(express.urlencoded({extended:false})); 
      //content type       //bring me the data

// Bringing JSON Middleware:
app.use(express.json());



// Need to call routes:


// Define another route:
app.use('/', require('./routes/root'));

// Define another route:
app.use('/employees', require('./routes/api/employees'));



// Static files - (like css, data, images, and views), except the HTML in our project. We will use this code to tell Middleware to handle static files:
app.use('/', express.static(path.join(__dirname, '/public')));
// This code is saying "go get these static files from the public folder".

app.use('/subfolder', express.static(path.join(__dirname,'/public')));



// app.all:
// * Use for all http requests - can use regex
// * if,checks for handling 404 errors 

// Refactor app.get('/*', code - to do: if anything apart from routes, given the user an error. Giving more options no json, no html, giving more options + check status ->

/* app.get('/*',(req, res)=>{
   res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
   }); */

app.all('*', (req,res) =>{

   res.status(404);
      if (req.accepts('html')){

         res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
      }

      else if (req.accepts('json')){

         res.json({'error':'Page not found error 404'});
// Pass the key:value pair above, key = error, value = message
      }

      else {
         res.type('txt').send("Problem displaying page error 404")
      }
});



/* // Error: if the URL does not exist, we do not want to expose our code - for example the else created sensitve code exposure with senitive information. So now we create a custom error handler to fix that + place it after the routes have been defined ( directly above) - 

app.use(function(err, req, res, next){

   console.log(err.stack);
   res.Status(500).send(err.message)
});
 */
// The code above to handle the error was refactored and used as a module in errorHandler.js - then exported into here the server.js. 

// The piece of code above is controlling how the error is seen by the user. 
app.use(errorHandler);

// Removing the || !origin with the const corsOptions code to see the code work.

// app.use for handling middleware - no regular expressions(regex)



//listner
app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));