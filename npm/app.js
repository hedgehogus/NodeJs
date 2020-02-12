const bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("qwerty", salt);

const match = bcrypt.compareSync("QWERTY", hash);
const match2 = bcrypt.compareSync("qwerty", hash);

console.log(hash, match);
console.log(match2);