const contactController = {};


contactController.showData = (req, res) => {
 console.log("contact data:",req.body);
 res.send('OK');
}

module.exports = contactController;