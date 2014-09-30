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
				message: "What is your app's name?",
				default: "awsomeApp"
			},
			{
				name: "ngApp",
				message: "What do you what to call your ng-app directive?",
				default: "App"
			},
			// {
			// 	name: "addController",
			// 	message: "Would you like to add a controller?",
			// 	default: false
			// },
			{
				name: "type",
				type: "rawlist",
				message: "What type of BEAN stack would you like to start off with?",
				choices: [
					{
						value: "baseBean",
	      		name: "Base Bean",
	      	},
	      	{
	      		value: "routeBean",
	      		name: "Route Bean",
	      	}
				],

				default: 0
			}
		];

		this.prompt(prompts, function (props) {
			this.appName = props.appName;
			this.ngApp = props.ngApp;
			this.type = props.type;
			// this.ctrl = props.addController

			console.log(this.type);

			done();
		}.bind(this));

	},

	scaffoldFolders: function () {
		this.mkdir("public/images");
		this.mkdir("src/js/controllers");
		this.mkdir("src/js/services");
	},

	copyMainFiles: function () {
		this.copy("_gruntfile.js", "Gruntfile.js");
		this.copy("_package.json", "package.json");
		this.copy("bowerrc", ".bowerrc");

		if (this.type === "baseBean") {
			this.copy("_bower.json", "bower.json");
		} else if (this.type === "routeBean") {
			this.copy("_ngRoute-bower.json", "bower.json");
			this.copy("src/js/_ngRoutes.js", "src/js/routes.js");
			this.copy("public/views/_beanstack.html", "public/views/beanstack.html");
		}
		
		this.copy("gitignore", ".gitignore");
		this.copy("_kickstart.js", "kickstart.js");
		this.copy("src/css/_main.scss", "src/css/main.scss");
		this.copy("src/css/modules/common/_mixins.scss", "src/css/modules/common/mixins.scss");
		this.copy("src/css/modules/common/_variables.scss", "src/css/modules/common/variables.scss");
		this.copy("_server.js", "server.js");
		
		
		var data = {
			siteName: this.appName,
			app: this.ngApp,
			type: this.type
		};

		this.template("src/js/_app.js", "src/js/app.js", data);
		this.template("public/_index.html", "public/index.html", data);
		this.template("app/routes.js", "app/routes.js", data);
	},

	generatorCtrls: function () {
		if (this.addController) {
			var done = this.async();
			
			
			this.invoke("bean-stack:controller", {args: ["AppCtrl"]}, function () {
				done();
			});
		}
	},

	runKickstart: function () {

		var kickstart = spawn("node", ["kickstart.js"]);

		kickstart.stdout.on("data", function (data) {
			console.log(data.toString());
		});

	}

});

module.exports = BeanStack;		