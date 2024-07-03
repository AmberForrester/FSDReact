// Perform verification - 
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const verifyJWT we will pick up the token value, put it into an array, then split it up. 

const verifyJWT = (req, res, next) => {
    // pick up the request, response, and next

    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.sendStatus(401);

    console.log(authHeader); // Bearer token shown by the authHeader

    const token = authHeader.split(' ')[1]; // View token NOT bearer
            // pick token up -> move into variable 
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,

        //Call back for error can say token or decoded info from jwt
        (err, decoded) => {
            if (err) return res.sendStatus(403); // Invalid token if token gets tampered with 

            req.user = decoded.username; // Pass the username and now its decoded
            
            next();
        }
    );
}

module.exports = verifyJWT;

