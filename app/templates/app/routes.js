module.exports = function (app) {
	var path = require("path"),
			dirName = __dirname.replace(path.basename(__dirname), "");
	<% if (type === "routeBean") { %>
	app.get('*', function(req, res) {
		res.sendFile(dirName + '/public/index.html');
	});
	<% } else { %>
	app.get("/", function(req, res) {
		res.sendFile(dirName + "/public/index.html");
	});
	// Add your routes below
	<% } %>
	
}