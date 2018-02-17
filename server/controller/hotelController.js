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

hotelController.fetchHotelByStar = (req, res) => {
	let hotelsFiltered = [];

	for (let key in req.body) {
    if (req.body[key]) {
    	if (key === "allStars"){
    		hotelsFiltered = data;
    	} else {
    		Array.from(data)
				.map((obj) => {
					if (obj.stars == key) {
						hotelsFiltered.push(obj);
					}
				});
    	}
    }
  }

	res.status(200).json({
		success: true,
		data: hotelsFiltered
	});
}

module.exports = hotelController;