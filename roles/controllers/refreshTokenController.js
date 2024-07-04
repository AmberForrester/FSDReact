// Need to hold the token securely when it automatically refreshes the tokens. 


// This block creates an object usersDB which manages the users.
// users is loaded from ../model/users.json, which contains the user data.
// setUsers is a function that updates the users array with new data.

const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const jwt = require('jsonwebtoken');
require('dotenv').config();


// This line defines a function handleRefreshToken that will handle automatically refreshing secure tokens - 
const handleRefreshToken = (req, res)=> {

    // Based of cookie information = refresh token - 
    const cookies = req.cookies;
    console.log(cookies);

    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    console.log(refreshToken); 

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken); 

    if (!foundUser) return res.sendStatus(403); // Forbidden 

    // Evaluate the jwt -
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403); 

            const roles = Object.values(foundUser.roles); // When user is found + roles is found. 
        const accessToken = jwt.sign(
            { "UserInfo": {
                            "username": decoded.username, // Using jwt claims.
                            "roles": roles
                        }
                },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}
        );
            res.json({ accessToken })
        }
    );
}

// This line exports the handleRefreshToken function so it can be used in other parts of your application.
module.exports = { handleRefreshToken };