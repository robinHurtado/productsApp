// this file imports as many models as you want
const User = require("../models/User"); 

// es6 allows you simplify {user:user} to just {user}
const db = {
	User
}

module.exports = db;