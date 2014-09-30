"use strict";

module.exports = function (grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({

		sass: {
			dist: {
				files: {
					"public/css/styles.css":"src/css/main.scss"
				}
			}
		},

		uglify: {
      my_target: {
        files: {
          'public/js/app.min.js': ['src/js/**.js', "src/js/controllers/*.js", "src/js/services/*.js"]
        }
      }
    },

		watch: {
			options: {
				livereload: true
			},
			styles: {
				files: ["src/css/*.scss", "src/css/modules/*.scss", "src/css/modules/common/*.scss"],
				tasks: ["sass"],
				options: {
					nospwan: true
				}
			},
			js: {
				files: ["src/js/*.js", "src/js/controllers/*.js"],
				tasks: ["uglify"],
				options: {
					nospwan: true
				}
			}
		},

		develop: {
	      server: {
	        file: 'server.js'
	      }
	    },

		exec: {
      run: {
        cmd: 'node server.js'
      },

      cleanBower: {
      	cmd: "rm -rf public/lib"
      },

      cacheClean: {
      	cmd: "npm cache clean"
      },

      cleanModules: {
      	cmd: "rm -rf node_modules"
      },

      decrepit: {
      	cmd: "echo  The use of grunt server is decrepit, and will be removed starting at v0.5.0. Please use just use grunt to start server"
      }
    }
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-exec");
	grunt.loadNpmTasks("grunt-develop");
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask("default", ["sass", "uglify", "develop", "watch"]);
	grunt.registerTask("jsmin", ["uglify"]);
	grunt.registerTask("sass", ["sass"]);
	grunt.registerTask("build", ["sass", "uglify"]);
	grunt.registerTask("clean:modules", ["exec:cleanModules"]);
	grunt.registerTask("server", ["exec:decrepit", "sass", "uglify", "develop", "watch"]);
	grunt.registerTask("clean:dependencies", ["exec:cleanBower", "exec:cleanModules"]);


}