const data = require('../data.json');

const hotelController = {}; // obj that holds functions related to user


hotelController.fetchHotels = (req, res) => {
	res.status(200).json({
		success: true,
		data: data
	});
}

hotelController.fetchHotel = (req, res) => {
	const { hotelName } = req.body;
	let found = false;

	Array.from(data)
	.map(obj => {
		if (obj.name == hotelName) {
			res.status(200).json({
				success: true,
				data: obj
			});
			found = true;
		}
	});

	found === false &&
	res.status(500).json({
		success: false,
		data: "Hotel no encontrado, intente de nuevo"
	});
}
/*
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

}*/

module.exports = hotelController;