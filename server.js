// Modules 
var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(); 

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// middleware parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Require Routes
//App is passed in because it lets use us express in other files
require('./app/routing/htmlRoutes.js')(app);

// Listens for when page is loaded and starts server
app.listen(PORT,function() {
	console.log('Listening for App' , PORT);
});