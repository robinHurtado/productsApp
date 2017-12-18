const db = require("../models"); // it loads index.js by default 

const userController = {};

// POST Function
userController.createUser = (req, res) => {
	// Destructuring - bind variables with the keys in body object
	const { username, email, psw  } = req.body; 

	const user = new db.User({
		username,
		email,
		psw
	});

	user.save().then((newUser) => {
		res.status(200).json({
			success: true,
			data: newUser
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
	
	users.findOne({'username':username,'psw':psw},'username email')
	.then((result) => {
		res.status(200).json({
			success: true,
			data:result
		})
	}).catch((err) => {
		res.status(500).json({
			success: false,
			data: err
		})	
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