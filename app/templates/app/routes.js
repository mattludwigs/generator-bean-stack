module.exports = function (app) {

	var path = require("path"),
			rootpath = __dirname.replace(path.basename(__dirname), "");
	
	app.get("/", function (req, res) {
		res.sendFile(rootpath + "views/index.html");
	});
	
}