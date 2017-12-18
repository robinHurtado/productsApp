const mongoose = require("mongoose");

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: { type: String, required: true, minlength: [7, "Must be 7 characters"]},
  
  email: { type: String, required: true},
	
	psw: {	type: String, required:true, minlength: [8, "password Must be 8 characters"]},

	isDeleted: {type: Boolean, default: false},
	
	createdAt: {type: Date, default: Date.now},
});

// Write some encryption for password

const User = mongoose.model("User", userSchema);

module.exports = User;