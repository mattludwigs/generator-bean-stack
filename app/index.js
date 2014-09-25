"use strict";

var util = require("util"),
		path = require("path"),
		childProcess = require("child_process"),
		spawn = childProcess.spawn,
		yeoman = require("yeoman-generator");

var BeanStack = yeoman.generators.Base.extend({

	 promptUser: function() {
      var done = this.async();
 
    // have Yeoman greet the user
    console.log(this.yeoman);

		var prompts = [
			{
				name: "appName",
				message: "What is your app's name?"
			},
			{
				name: "ngApp",
				message: "What do you what to call your ng-app directive?"
			}
		];

		this.prompt(prompts, function (props) {
			this.appName = props.appName;
			this.ngApp = props.ngApp;

			done();
		}.bind(this));

	},

	scaffoldFolders: function () {
		this.mkdir("public/images");
		this.mkdir("src/js/controllers");
	},

	copyMainFiles: function () {
		this.copy("_gruntfile.js", "Gruntfile.js");
		this.copy("_package.json", "package.json");
		this.copy("bowerrc", ".bowerrc");
		this.copy("_bower.json", "bower.json");
		this.copy("gitignore", ".gitignore");
		this.copy("_kickstart.js", "kickstart.js");
		this.copy("src/css/_main.scss", "src/css/main.scss");
		this.copy("src/css/modules/common/_mixins.scss", "src/css/modules/common/mixins.scss");
		this.copy("src/css/modules/common/_variables.scss", "src/css/modules/common/variables.scss");
		this.copy("_server.js", "server.js");
		this.copy("app/routes.js", "app/routes.js");
		
		var data = {
			siteName: this.appName,
			app: this.ngApp
		};

		this.template("src/js/_app.js", "src/js/app.js", data);
		this.template("views/_index.html", "views/index.html", data);
	},

	runKickstart: function () {

		var kickstart = spawn("node", ["kickstart.js"]);

		kickstart.stdout.on("data", function (data) {
			console.log(data.toString());
		});

	}

});

module.exports = BeanStack;		