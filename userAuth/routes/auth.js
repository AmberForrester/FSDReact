const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


const fsPromises = require('fs').promises;
const path = require('path');



router.post('/' , authController.handleLogin);


module.exports = router;