console.log('db.js');

const users = require('./users');

function getUsers(param) {
    users.push(param)
    return users;
}

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

// module.exports.getUsers = getUsers;


module.exports = {
    User,
    getUsers,
    users
}


// we can use also expors instead of module.exports, but we can use it only as object - not "exports = getUsers" 

/*
exports.getUsers = getUsers;
exports.users = users;
*/

 console.log(module);