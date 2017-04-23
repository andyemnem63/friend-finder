module.exports = function(app) {

	// Display survey page
	app.get('/survey',function(req, res) {
		res.sendFile(path.join(__dirname+ '../public/survey.html'));
	});
}