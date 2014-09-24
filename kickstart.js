var childProcess = require("child_process"),
		spawn = childProcess.spawn,
		path = require("path"),
		fs = require("fs");
		parentDir = path.basename(__dirname),
		appName = makeName();

function info(msg, type) {
	if (type === "check") {
		console.log("\033\[0;36m\[KickStart]:\033[0m\033[0;32m\ " + msg + " √\033[0m");
	} else if (type === "info") {
		console.log("\033\[0;36m\[KickStart]:\033[0m " + msg);
	} else {
		console.log("\033\[0;36m\[KickStart]: " + msg +"\033[0m");
	}
};

function makeName() {
	parentDir = parentDir.split("-");
	var i

	for (i = 0; i < parentDir.length; i++) {
		parentDir[i] = parentDir[i].charAt(0).toUpperCase() + parentDir[i].slice(1);
	};

	parentDir = parentDir.join(",").replace(",", "");

	return parentDir;
}


function breakMarker() {
	console.log(">>>>>><<<<<<");
}

function init() {
	info("Setting up your project!");
	breakMarker();
	info("Installing node modules, go grab a beer", "info");

	npm();

};

function npm() {
	var nodeModules = spawn("npm", ["install"]);

	nodeModules.stdout.on('data', function (data) {
	  console.log(data.toString());
	});

	nodeModules.on("close", function () {
		info("Node Modules Installed", "check");

		bower();
	});
};

function bower() {
	breakMarker();
	info("installing bower packages, grab more beer", "info");
	breakMarker();

	var bowerInstall = spawn("bower", ["install"]);

	bowerInstall.stdout.on("data", function (data) {
		console.log(data.toString());
	});

	bowerInstall.on("close", function () {
		info("Bower Packages installed", "check");
		breakMarker();
		cleanUpRemoval();
	});
};

function cleanUpRemoval () {
	info("Cleaning up packages", "info");
	breakMarker();

	var cleanJQ = spawn("rm", ["-rf", __dirname + "/public/lib/jquery/"]);
	bsClean();

	cleanJQ.on("close", function () {
		info("jQuery cleaned!", "check");
	});	
};

function bsClean() {
	var cleanFolders = [
				"grunt",
				"js",
				"less",
				"test-infra",
				"fonts",
				"dist/js"
				],

			cleanFiles = [
				".bower.json", 
				"bower.json", 
				"Gruntfile.js",
				"LICENSE",
				"package.json",
				"README.md"
			],

			counters = {
				folder: 0,
				file: 0
			},

			cleanBootFiles;

	cleanFolders.forEach(function (folder) {
		var cleanBoot = spawn("rm", ["-rf", __dirname + "/public/lib/bootstrap/" + folder +"/"]);
		counters.folder += 1;
	});


	cleanFiles.forEach(function (file) {
		cleanBootFiles = spawn("rm", [__dirname + "/public/lib/bootstrap/" + file]);
		counters.file += 1;
	});

	cleanBootFiles.on("close", function () {
		if (counters.folder === cleanFolders.length && counters.file === cleanFiles.length) {
			info("Bootstrap cleaned!", "check");
			angularClean();
		};
	});

};

function angularClean() {
	var files = [
		".bower.json",
		"angular.min.js.gzip",
		"README.md",
		"bower.json",
		"angular-csp.css"
	],

	cleanAngFiles,

	counter = 0;

	files.forEach(function (file) {
		cleanAngFiles = spawn("rm", [__dirname + "/public/lib/angular/" + file]);
		counter++;
	});

	cleanAngFiles.on("close", function () {
		if (counter === files.length) {
			info("Angular cleaned!", "check");
			writeFiles();
		};
	});
};

function writeFiles() {
	breakMarker();
	info("Setting up some files, grab another beer!", "info");
	breakMarker();

	fs.writeFile(__dirname + "/src/js/app.js", "var app = angular.module(\"" + appName + "\", []);", function (err) {
			if (err) {
				console.log(err.stack);
				throw err;
			};

			info("App.js file is ready to go!", "check");
	});
	makeViews();
	writeIndexHTML();
};

function writeIndexHTML() {
	fs.exists(__dirname + "/views/index.html", function (exists) {

		if (!exists) {

			fs.writeFile(__dirname + "/views/index.html", "<!DOCTYPE html>\n<html ng-app='" + parentDir + "'>\n<head>\n\t<title>" + parentDir + "</title>\n\t<link rel='stylesheet' href='public/css/styles.css'>\n</head>\n<body>\n\t<h1>Hello</h1>\n\n\t<script src='//localhost:35729/livereload.js'></script>\n\t<script src=\"public/lib/angular/angular.min.js\"></script>\n\t<script src=\"public/js/app.min.js\"></script>\n</body>\n</html>", function (err) {
					if (err) {
						console.log(err.stack);
						throw err;
					};

					info("Index.html file is ready to go!", "check");
			});
		}
	});
};

function makeViews() {
	fs.exists(__dirname + "/views/", function (exists) {
		if(!exists) {
			fs.mkdirSync(__dirname + "/views/");
		}
	});
}



// run this tish!
init();


