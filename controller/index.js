"use strict";

var util = require("util"),
		yeoman = require("yeoman-generator");

var ControllerGenerator = yeoman.generators.NamedBase.extend({

	generateController: function () {
		var context = {
			name: this.name,
			moduleName: "",
			id: this._.classify(this.name)
		};

		var name;

		if (context.name.indexOf("Ctrl") === -1 && context.name.indexOf("Controller") === -1) {

			context.moduleName = this._cap(context.name);
			name = context.name;
			context.name = name + "Ctrl";

		} else if (context.name.indexOf("Ctrl") !== -1) {
			context.moduleName = this._cap(context.name.replace("Ctrl", ""));
			name = context.name.replace("Ctrl", "");
		} else if (context.name.indexOf("Controller") !== -1) {
			context.moduleName = this._cap(context.name.replace("Controller", ""));
			name = context.name.replace("Controller", "");
		}

		this.template("_controller.js", "src/js/controllers/" + name + ".js", context);
	},

	_cap: function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

});

module.exports = ControllerGenerator;