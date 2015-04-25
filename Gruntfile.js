'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			client: {
				src: [
					'client/js/**/*.js'
				],
				options: {
					jshintrc: '.jshintrc-client'
				}
			}
		},
		jscs: {
			src: '<%= jshint.client.src >',
			options: {
				config: '.jscsrc'
			}
		},
		watch: {
			options: {
				maxListeners: 99,
				spawn: false,
				interrupt: true,
				debounceDelay: 2000,
				interval: 500
			},
			client: {
				files: [
					'<%= jshint.client.src %>'
				],
				tasks: ['verify']
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('verify', [ 'jshint', 'jscs' ]);

	grunt.registerTask('default', [ 'verify' , 'watch' ]);
}
