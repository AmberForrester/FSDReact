const express = require('express');
const router = express.Router();
const path = require('path');


// '^/$|/ = must begin with/end with or ... 
// (.html)? = allows html to be optional
router.get('^/$|/index(.html)?', (req, res) => {
    
    res.sendFile(path.join(__dirname, '..','views','subfolder' ,'index.html'));
 });


 router.get('^/$|/mytest(.html)?', (req, res) => {
    
    res.sendFile(path.join(__dirname, '..','views','subfolder' ,'mytest.html'));
 });



 module.exports = router; 



