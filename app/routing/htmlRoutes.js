var path = require('path');

module.exports = function(app) {

	app.get('/survey',function(req, resp) {
		resp.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
}