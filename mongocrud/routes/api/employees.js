const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeeController');
// Give route for ../ = come out of api, ../ = come out of routes, go into controllers folder, and get the employeesController.js file 

const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../myCustomMiddleware/verifyRoles');


// Create a route structure that avoids needing get, post, put, and delete as multiple routes, as done previously, instead we do this:

router.route('/')
    .get(employeesController.getAllEmployees)

    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createEmployee)

    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),employeesController.updateEmployee)

    .delete(verifyRoles(ROLES_LIST.Admin),employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);



module.exports = router;
