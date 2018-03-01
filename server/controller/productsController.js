const data = require('../data.json');

const productsController = {};


productsController.fetchproducts = (req, res) => {
	res.status(200).json({
		success: true,
		data: data
	});
}

module.exports = productsController;