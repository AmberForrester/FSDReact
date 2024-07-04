require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const corsOptions = require('./controllers/corsController');
const {logger} = require('./myCustomMiddleware/eventLog');
const errorHandler = require('./myCustomMiddleware/errorHandler');
const verifyJWT = require('./myCustomMiddleware/verifyJWT');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/dbConn');
const {default:mongoose} = require('mongoose');

const myPORT = process.env.PORT || 3400;

connectDB();


//Custom Middleware Logger -
app.use(logger);


// Cross Origin Resource Sharing -
app.use(cors(corsOptions));
// What was done using const corsOptions: created an object with key:value, key:value. The origin = key, value = code created within the () => {}.



// Middleware: define these routes before other routes -

// Built in Middleware - This piece of code is used in context of data from a form, posting that data from the form to the server, Middleware is doing this. Handles urlencoded form data - 
app.use(express.urlencoded({extended:false})); 
      //content type       //bring me the data

// Built in Middleware for JSON -
app.use(express.json());

// Middleware for Cookies - 
app.use(cookieParser());


// Static files - (like css, data, images, and views), except the HTML in our project. We will use this code to tell Middleware to handle static files:
app.use('/', express.static(path.join(__dirname, '/public')));
// This code is saying "go get these static files from the public folder".

app.use('/subfolder', express.static(path.join(__dirname,'/public')));



// Define routes -
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));



app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));



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

mongoose.connection.once(
   'open', () => {
      console.log('DB Connected');

//listner
app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));

   }
);

