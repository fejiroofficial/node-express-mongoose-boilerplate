module.exports = function(grunt) {

    // file to watch and scan
    var files = [
        'boilerplate.js',
        'app.js',
        'Gruntfile.js',
        'models/*.js',
        'routes/*.js',
        'test/*.js',
        'lib/*.js'
    ];

    grunt.initConfig({
                         jscs: {
                             scan: {
                                 src: files,
                                 options: {
                                     config: 'config.jscs.json'
                                 }
                             },
                             fix: {
                                 src: files,
                                 options: {
                                     config: 'config.jscs.json',
                                     fix: true
                                 }
                             }
                         },
                         jshint: {
                             all: files
                         },

                         //https://github.com/pghalliday/grunt-mocha-test
                         mochaTest: {
                             tests: {
                                 src:['test/**/*'],
                                 options: {
                                     reporter: 'spec'
                                 }
                             },
                             watch: {
                                 src:['test/**/*'],
                                 options: {
                                     reporter: 'nyan'
                                 }
                             },
                             tap: {
                                 src:['test/**/*'],
                                 options: {
                                     reporter: 'tap'
                                 }
                             }
                         },

                         apidoc: {
                             boilerplate: {
                                 src: 'routes',
                                 dest: 'public/api-docs/'
                             }
                         },
                         jsdoc: {
                             dist: {
                                 src: ['lib/*.js', 'routes/*.js', 'README.md'],
                                 options: {
                                     destination: 'public/docs',
                                     template: 'node_modules/minami'
                                 }
                             }
                         },
                         watch: {
                             js: {
                                 options: {
                                     spawn: true,
                                     interrupt: true,
                                     debounceDelay: 250
                                 },
                                 files: files,
                                 tasks: ['mochaTest:watch']
                             }
                         }
                     });

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    // register tasks
    grunt.registerTask('default', ['cleanup', 'test', 'docs']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('cleanup', ['jscs:fix', 'jshint']);
    grunt.registerTask('docs', ['apidoc', 'jsdoc']);

};
