const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');

const bcrypt = require('bcrypt');

const handleNewUser = async (req, res)=>{

    const {user, pwd} = req.body;

if (!user||!pwd)

    return res.status(400).json({ "message": "user and password must be provided" });;
        
        // Check for duplicate users in the DB - 
        const duplicate = usersDB.users.find(person => person.username === user)

        if (duplicate)

        return res.status(409);

try {

    // Encrypt the password -
    const hashedPwd= await bcrypt.hash(pwd, 10);

        //Store the new user - 
        const newUser  = {
            "username" : user, 
            "roles": {"User":1111},
            "pwd" : hashedPwd
        };
        // Everytime a new user is created - it is given a user role. 

        usersDB.setUsers([...usersDB.users, newUser])

        await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'),
        
        JSON.stringify(usersDB.users)
);

console.log(usersDB.users);

res.status(201).json({ "message": `New user ${user} is created` });

}
catch (err) {

res.status(500).json({ "message": err.message });
}
}

module.exports = { handleNewUser };