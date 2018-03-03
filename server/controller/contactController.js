const contactController = {};


contactController.showData = (req, res) => {
 console.log("contact data:",req.body);
}

module.exports = contactController;