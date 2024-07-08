const User = require('../model/User');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    console.log(cookies);
    if (!cookies?.jwt) return res.sendStatus(204); //No content to send back
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
        //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //for the production 
        res.clearCookie('jwt', { httpOnly: true}); //for the dev 
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = { ...foundUser, refreshToken: '' };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

    //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.clearCookie('jwt', { httpOnly: true});
    res.sendStatus(204);
}

module.exports = { handleLogout };