/* const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
 */
const User = require('../model/User');

const bcrypt = require('bcrypt');

const handleNewUser = async (req, res)=>{

    const {user, pwd} = req.body;

if (!user||!pwd)

    return res.status(400).json({ "message": "user and password must be provided" });;
        
        // Check for duplicate users in the DB - 
        const duplicate = await User.findOne({username: user}).exec();
        console.log(duplicate);

        if (duplicate) return res.sendStatus(409); // Showing a conflict 

try {

    // Encrypt the password -
    const hashedPwd= await bcrypt.hash(pwd, 10);

        const result = await User.create(
            {
                "username": user,
                "password": hashedPwd
            }
        );
        console.log(result);

res.status(201).json({ "message": `New user ${user} is created` });

}
    catch (err) {

        res.status(500).json({ "message": err.message });
    }
}

module.exports = { handleNewUser };