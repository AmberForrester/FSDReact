const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeeController');
// Give route for ../ = come out of api, ../ = come out of routes, go into controllers folder, and get the employeesController.js file 


// Create a route structure that avoids needing get, post, put, and delete as multiple routes, as done previously, instead we do this:

router.route('/') 
    .get(employeesController.getAllEmployees)
    .post(employeesController.createEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);



module.exports = router;
