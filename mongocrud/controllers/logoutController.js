const User = require('../model/User');

const jwt = require('jsonwebtoken');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    console.log(cookies);
    if (!cookies?.jwt) return res.sendStatus(204); //No content to send back
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await User.findOne({refreshToken}).exec();
    if (!foundUser) {
        //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //for the production 
        res.clearCookie('jwt', { httpOnly: true}); //for the dev 
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    
    //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.clearCookie('jwt', { httpOnly: true});
    res.sendStatus(204);
}

module.exports = { handleLogout };