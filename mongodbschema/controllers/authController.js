// This block creates an object usersDB which manages the users.
// users is loaded from ../model/users.json, which contains the user data.
// setUsers is a function that updates the users array with new data.

const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const jwt = require('jsonwebtoken');
//require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

// This line imports the bcrypt library, which is used for hashing passwords and comparing hashed passwords.
const bcrypt = require('bcrypt');

// This line defines an asynchronous function handleLogin that will handle user login requests.
const handleLogin = async (req, res)=>{

    // This extracts the user and pwd (password) from the request body.
    const { user, pwd } = req.body;

    // This checks if user or pwd is missing from the request body. If either is missing, it sends a 400 Bad Request response with a message indicating that both fields are required.
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    // This line searches for a user in the usersDB.users array whose username matches the user provided in the request.
    const foundUser = usersDB.users.find(person => person.username === user)

    if (!foundUser) 
        //If no matching user is found, this line sends a 401 Unauthorized response.
    return res.sendStatus(401);
    
    // This line compares the provided password (pwd) with the stored hashed password (foundUser.pwd) using bcrypt.compare. It awaits the result since bcrypt.compare is asynchronous + evaluates password - 
    const match = await bcrypt.compare(pwd, foundUser.pwd);

    if (match) {
        // If the passwords match, it sends a JSON response indicating a successful login. The comment mentions creating JWTs (JSON Web Tokens), which is typically the next step for maintaining sessions securely.

// Create JWTs BELOW - using the access token & refersh token we want 3 things: 1. username: for which the token is generated for, 2. process: to hold the token, 3. expiry time. 

        const roles = Object.values(foundUser.roles); // When user is found + roles is found. 
        const accessToken = jwt.sign(
            { "UserInfo": {
                            "username": foundUser.username, // Using jwt claims.
                            "roles": roles
                        }
                },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}
        );

        const refreshToken = jwt.sign(
            {"username": foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

// Saving refreshToken with the current user:

    const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);

    const currentUser = {...foundUser, refreshToken};
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

// For the production env: 
// res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

// For the development env, remove the secure:true - 
res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

res.json({accessToken});

        //nres.json({ 'success': `User ${user} is logged in!` });

    } else {
        //If the passwords do not match, it sends a 401 Unauthorized response.
        res.sendStatus(401);
    }

    //return res.status(200).json({"message": "checking auth success"});
    // A placeholder or for debugging purposes. It would send a 200 OK response with a message indicating successful authentication check if uncommented.
}

// This line exports the handleLogin function so it can be used in other parts of your application.
module.exports = { handleLogin };



// Basic breakdown of this function:
// Import user data and bcrypt library.
// Define an async function handleLogin to process login requests.
// Extract user and pwd from the request body.
// Check for missing user or pwd and return a 400 error if either is missing.
// Find the user in the database.
// If the user is not found, return a 401 Unauthorized error.
// Compare the provided password with the stored password.
// If the passwords match, return a success message (with a placeholder for JWT creation).
// If the passwords don't match, return a 401 Unauthorized error.
// Export the handleLogin function.