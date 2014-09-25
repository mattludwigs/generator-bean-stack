var express = require("express"),
		routes = require("./app/routes"),
		app = express(),
		port;

// Include the routes module		
routes(app);
// Set port
port = process.env.PORT || 9778;
// Use public directory for static files
app.use("/public", express.static(__dirname + "/public/"));

// Your code here

app.listen(port);