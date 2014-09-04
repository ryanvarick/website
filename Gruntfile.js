module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// check syntax
		jshint: {
			files: ["*.js", "*.json", "server/*.js", "server/scraper/*.js"]
		},

		// automatically reload
		watch: {
			files: ["<%= jshint.files %>"],
			tasks: ["clear", "jshint", "serve"],
			options: {
				atBegin: true,
				interrupt: true
			}
		}
	});

	// task handlers
	grunt.loadNpmTasks("grunt-clear");           // clear screen
	grunt.loadNpmTasks("grunt-execute");         // run scripts
	grunt.loadNpmTasks("grunt-contrib-jshint");  // check for code problems
	grunt.loadNpmTasks("grunt-contrib-watch");   // auto-reload

	// tasks
	grunt.registerTask("default", ["jshint", "execute"]);
	grunt.registerTask("dev", ["watch"]);
	grunt.registerTask("serve", function() {
		var done = this.async();
		var app = require("./app.js");
		app.start();
	});
};
