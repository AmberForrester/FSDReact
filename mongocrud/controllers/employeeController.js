// Change methods to get from DB NOT the json file -
// First import the Employee model:
const Employee = require('../model/Employee');
// This creates a new connection with the Schema.


// "Chaining": creating different methods for a particular route.
// Do not need next after req, res R/T chaining with routes only when using middleware.



const getAllEmployees = async (req, res) => {
// Move data from MongoDB, find employees and move into variable
    const employee = await Employee.find();
    if(!employee) return res.status(204).json({'message':'Employee not found'});
    res.json(employee);
    }


const updateEmployee = async (req, res) => {
// Custom logic = use this to change the first and/or last name.

    // id is automatically generated by MongoDB
    if (!req?.body?.id) {
            return res.status(400).json({"message": `id was not provided`});
                // Inform user that the employee ID requested was not made available
        }

        // Create an object giving key:value pairs to the function, to bring back an employee using a particular id - 
        const employee = await Employee.findOne({_id:req.body.id}).exec();

        if (!employee) {
            return res.status(204).json({ "message": `Employee ID ${req.body.id} not found` });
        }

        // If ID does exist ... using if checks to pick up the firstname and the lastname of employee -
        if (req.body?.firstname) employee.firstname = req.body.firstname;
        if (req.body?.lastname) employee.lastname = req.body.lastname;

        const result = await employee.save();
        // Then passing the updated employees as a result variable to the user - 
        res.json(result);
}

const createEmployee = async (req, res) => {

    // id is automatically generated by MongoDB
   
    if (!req?.body?.firstname || !req?.body?.lastname) {
        // If NO firstname or NO lastname is there ...

        // Send this response code + pass a message to the user. 
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    try {

        const newEmployee = {

        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
                                      // from the Schema 
            const result = await Employee.create(newEmployee);
            // Then passing the new employee created as a result variable to the user -                    
            res.status(201).json(result);
    }

        catch (err) {
        console.log(err);
    }
}

const deleteEmployee = async (req, res) => {

    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'id was not provided'});
    }

    const employee = await Employee.findOne({_id:req.body.id}).exec();

    if (!employee) {
        return res.status(400).json({"message":`Employee ID ${req.body.id} not found`});
    }

    const result = await employee.deleteOne();
    res.json(result);
}

const getEmployee = async (req, res) => {

    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'id was not provided'});
    }

    const employee = await Employee.findOne({_id:req.body.id}).exec();
    
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }

    res.json(employee);
}


module.exports = {getAllEmployees,  updateEmployee , createEmployee, deleteEmployee, getEmployee};

// We use {} R/T *multiple uses of module exports. 