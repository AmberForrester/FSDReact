const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname,'..', 'views', 'index.html'));
 });
 
router.get('/my_new_page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'my_new_page.html'));
 });
 
router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/my_new_page.html'); //302 by default
 });

module.exports = router;