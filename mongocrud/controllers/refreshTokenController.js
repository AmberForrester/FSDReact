// Need to hold the token securely when it automatically refreshes the tokens. 


const User = require('../model/User');

const jwt = require('jsonwebtoken');


// This line defines a function handleRefreshToken that will handle automatically refreshing secure tokens - 
const handleRefreshToken = async (req, res)=> {

    // Based of cookie information = refresh token - 
    const cookies = req.cookies;
    console.log(cookies);

    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    console.log(refreshToken); 

// Pass refresh Token as an object to throw into MongoDB.
    const foundUser = await User.findOne({refreshToken}).exec();

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