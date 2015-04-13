module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Configure Grunt
grunt.initConfig({

// grunt-watch will monitor the projects files
// https://github.com/gruntjs/grunt-contrib-watch
watch: {
    all: {
            files: ['**/*.html', '**/*.js', '**/*.css'],
            options: {
                livereload: true
        }
    }
},

});

// Creates the `server` task
grunt.registerTask('server', [
    'watch'
    ]);
};