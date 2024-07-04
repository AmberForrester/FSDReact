                // Receive an array from const rolesArray.
const verifyRoles = (...allowedRoles) => {

    return (req, res, next) => {

        // Checking if the roles are there or not -
        if (!req?.roles) return res.sendStatus(401);

        const rolesArray = [...allowedRoles];
                        // Passing the roles. 
        console.log(rolesArray); // Showing roles passed in. 
        console.log(req.roles); // Showing roles from jwt R/T created the token and added the roles that they have. 


// Create logic whether we found a role the user or not + what we found for the user - 
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);

        if (!result) return req.sendStatus(401);

        next();
    };
  }
  
  module.exports = verifyRoles; 