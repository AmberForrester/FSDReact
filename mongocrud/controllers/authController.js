const User = require('../model/User');

const jwt = require('jsonwebtoken');

// This line imports the bcrypt library, which is used for hashing passwords and comparing hashed passwords.
const bcrypt = require('bcrypt');

// This line defines an asynchronous function handleLogin that will handle user login requests.
const handleLogin = async (req, res)=>{

    // This extracts the user and pwd (password) from the request body.
    const { user, pwd } = req.body;

    // This checks if user or pwd is missing from the request body. If either is missing, it sends a 400 Bad Request response with a message indicating that both fields are required.
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

                            // Find object using key:value pair
    const foundUser = await User.findOne({username:user}).exec()

    if (!foundUser) return res.sendStatus(401);
        //If no matching user is found, this line sends a 401 Unauthorized response.
    
    
    // This line compares the provided password (pwd) with the stored hashed password (foundUser.pwd) using bcrypt.compare. It awaits the result since bcrypt.compare is asynchronous + evaluates password - 
    const match = await bcrypt.compare(pwd, foundUser.password);

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
            {expiresIn: '40s'}
        );

        const refreshToken = jwt.sign(
            {"username": foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        // Match refreshToken to user - if it is found throw into MongoDB
        foundUser.refreshToken = refreshToken;
        // Moves foundUser into database. 
        const result = await foundUser.save();
        console.log(result);

// For the production env: 
// res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

// For the development env, remove the secure:true - 
res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

res.json({accessToken});

    } else {
        //If the passwords do not match, it sends a 401 Unauthorized response.
        res.sendStatus(401);
    }
}

// This line exports the handleLogin function so it can be used in other parts of your application.
module.exports = { handleLogin };