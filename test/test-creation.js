/*global describe, beforeEach, it*/
'use strict';

var path = require('path'),
    helpers = require('yeoman-generator').test,
    assert = require('yeoman-generator').assert;

var opts = {
	"appName": "test",
	"ngApp": "test"
};

describe('Bean Stack Generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('bean-stack:app', [
    		'../../app',
			]);
      done();
    }.bind(this));
  });


  it("creates expected core files", function (done) {

		var expected = [
      "Gruntfile.js",
   		"package.json",
   		".bowerrc",
   		"bower.json",
   		".gitignore",
   		"kickstart.js",
   		"src/css/main.scss",
   		"server.js",
   		"app/routes.js",
   		"src/js/app.js",
   		"views/index.html",
      "src/css/modules/common/mixins.scss",
      "src/css/modules/common/variables.scss"
  	];

  	helpers.mockPrompt(this.app, opts);

  	this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      assert.file(expected);
      done();
    });
  });

});