var express = require("express"),
		routes = require("./app/routes"),
		app = express();

// Include the routes module		
routes(app);
// Use public directory for static files
app.use("/public", express.static(__dirname + "/public/"));

// Your code here

app.listen("9778");