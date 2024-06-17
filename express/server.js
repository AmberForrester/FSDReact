
const path = require('path');
const myPORT = process.env.PORT || 3400;


const express = require('express');
const { Console } = require('console');
const app = express()

/*
// respond with "hello world" when a GET request is made to the homepage

app.get('^/$|index(.html)?',(req, res)=>{

//res.send("Welcome to CBC");
//res.sendFile('./views/index.html',{root:__dirname});
res.sendFile(path.join(__dirname, 'views', 'index.html'));


});

app.get('^/$|my_new_page(.html)?',(req, res)=>{
res.sendFile(path.join(__dirname, 'views', 'my_new_page.html'));
});

app.get('^/$|any_page(.html)?',(req, res)=>{
res.redirect(301, 'my_new_page.html');
});

app.get('/*',(req, res)=>{
res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
});
*/



app.get('/hello(.html)?',(req, res, next )=>{

    console.log('loading hello.html');
    next();
}, (req, res)=> {

    res.send('Hi everyone')
 }
 );

//chaning
const one = (req, res, next)=> {

    console.log('one');
    next();
 };

 const two = (req, res, next)=> {

    console.log('two');
    next();
 };

 const three = (req, res, next)=> {

    console.log('three');
    next();
 };

 const fourth = (req, res)=> {

    console.log('fourth');
    res.send('Completed');
 };

 app.get('/abc(.html)?',[one, two, three, fourth]);

 //Middleware










//listner
app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));