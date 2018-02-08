const db = require("../models"); // it loads index.js by default 
const bcrypt = require("bcryptjs");

const userController = {}; // obj that holds functions related to user

// POST Function
userController.createUser = (req, res) => {
	// Destructuring - bind variables with the keys in body object
	const { username, email, psw  } = req.body; 
	let user = new db.User();
	
	user.username = username;
	user.email = email;
	user.psw = user.generateHash(psw);

	user.save().then((newUser) => {
		res.status(200).json({
			success: true,
			data: newUser.username
		});

	}).catch((err) => {
		res.status(500).json({
			success: false,
			data: err
		})
	})
}

userController.loginUser = (req, res) => {
	const users = db.User;
	const { username, psw  } = req.body; 
	users.findOne({'username':username},'username psw email', function(err, result){
		if (result){
			// bcrypt func to validate password enter and password in db
			const isValid = bcrypt.compareSync(psw, result.psw);
			isValid === true ? res.status(200).json({
				success: true,
				data: result.username
			}) : res.status(500).json({
				success: false,
				data: "Username or password may be incorrect, please try again."
			})
		} else {
			res.status(500).json({
				success: false,
				data: "User does not exit, try again"
			});
		}
	})
	
}

userController.changePassword = (req, res) => {
	const users = db.User;
	const { psw: newPsw, email } = req.body;
	users.findOne({'email': email})
	.then((user) => {
		user.set({ psw: newPsw });
		user.save(()=>{
			res.status(200).json({
				success: true
			})
		});
	})
	.catch((err) =>{
			res.status(500).json({
			success: false,
			data: err
		})
	});
}

// GET Function
userController.get = (req, res) => {
	// user 
	const users = db.User;

	users.find().then((result) => {
		res.status(200).json({
			success: true,
			data: result
		});

	}).catch((err) => {
		res.status(500).json({
			success: false,
			data: err
		})
	})
}

// DELETE Function
userController.delete = (req, res) => {
	const users = db.User;
	const userId = req.params.userId;

	users.findById(userId).then((result) => {
		result.remove(function() {
			res.status(200).json({
				message: "user with the id: " + userId + " was removed"
			})
		})
	}).catch((err) => {
		res.status(500).json({
			message: err
		})
	})

}

module.exports = userController;