// require ('db'); - without path - will search this module in build in modules

// const db = require('./db');
// console.log(db.getUsers('fff'));

// const getUsers = require('./db');

// const getUsers = require('./db').getUsers;

// const { users, getUsers} = require('./db');

const { db } = require('./module');

const user = new db.User('fisr', 'last');

console.log(user);

// require ('db'); - will search this module in build in modules
