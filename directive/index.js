"use strict";

var util = require("util"),
		yeoman = require("yeoman-generator");

var ControllerGenerator = yeoman.generators.NamedBase.extend({

	generateDirective: function () {
		var context = {
			name: this.name,
			id: this._.classify(this.name)
		};

		context.moduleName = this._cap(context.name);
		this.template("_directive.js", "src/js/directives/" + context.name + ".js", context);
	},

	_cap: function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

});

module.exports = ControllerGenerator;