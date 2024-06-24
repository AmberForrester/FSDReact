// Announce data as an object key: value:
const data = {
    employees: require('../model/employees.json'),
    // Give route for ../ = come out of controllers, go into model folder, and get the employees.json file
setEmployees : function(data) {this.employees= data}
};



// "Chaining": creating different methods for a particular route.
// Do not need next after req, res R/T chaining with routes only when using middleware.



const getAllEmployees = (req, res) => {
// Custom logic = "what we want to do" => Do not have to do anything with the data, just throw the response returning all of the data. 

        res.json(data.employees);
    // Pick up the response, and send all data from employees. 
    }


const updateEmployee = (req, res) => {
// Custom logic = use this to change the first and/or last name.

    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    // equate to the employee that exists, pick up the id and if it is found, update employee. 

        if (!employee) {
            // If the employee does NOT exist - then return error + message 
            return res.status(400).json({"message": `Employee ID ${req.body.id} not found.`});
                // Inform user that the employee ID requested does not exist. 
        }

        // If ID does exist ...
        if (req.body.firstname) employee.firstname = req.body.firstname;
        if (req.body.lastname) employee.lastname = req.body.lastname;

        // Let us filter through the array -> if the value matches id = move new data into the filtered Array.
        const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));

        // Filtered new 1 employee to update employee: take the array and replace it with the new employee.
        const unsortedArray = [...filteredArray, employee];
                            // From filtered Aray -> update employee.

        data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
        // Handles deleted or filtered - chaining the array by sorting ...

        // Then passing the updated employees to the user. 
        res.json(data.employees);
}

const createEmployee = (req, res) => {
   
     const newEmployee = {
// Declaring an object

        // Pick up the employee data + length = getting the entire length in real time, by using +1 -> moving the results to the id, firstname, lastname. 
        id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
        // Adding a new employee, we know the structure of the object id, firstname, and lastname. 
    }

    if (!newEmployee.firstname || !newEmployee.lastname) {
        // If NO firstname or NO lastname is given ...

        // Send this response code + pass a message to the user. 
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    //setEmployees is a variable defined at the top. 
    data.setEmployees([...data.employees, newEmployee]);
                // ... is using the Spread Operator to find all the current employees -> then take the new data + add it to the employee data. 

    res.status(201).json(data.employees);
    // As part of the request we want to change and update the status as being successful + attaching json data to it. 
}

const deleteEmployee = (req, res) => {

    // Bring the ID and find out if the ID exists or not. 
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    
    if (!employee) {
        // If it does NOT exist or null -> return status code + message
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }

    // *** Remember we are not deleting but we are filtering out the ID -> filter = update(filtering id out + updating new)
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));

    data.setEmployees([...filteredArray]);
            // using ... = pushed this filtered array, and passing it to setEmployees.

    res.json(data.employees);
    // Throwing result out to the user, passing the updated data ID to the json data.employees. 
}

const getEmployee = (req, res) => {

    // Bring the ID and find out if the ID exists or not. 
    // Filter portion moved into a variable w/employee.
    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    // Filter out the data by using find = get the data after we filter it, and then pass it back to a singular employee. 
    
    if (!employee) {
        // If employee does NOT exist then ... 
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
        // Return error code + a message to the user.
    }
    
    res.json(employee);
    // Pick up the response(res) + send all data to employees but USE single employee as the response.
}


module.exports = {getAllEmployees,  updateEmployee , createEmployee, deleteEmployee, getEmployee};

// We use {} R/T *multiple uses of module exports. 