module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    jasmine_node: {
        specNameMatcher: "spec",
        projectRoot: ".",
        requirejs: false,
        forceExit: true,
        jUnit: {
            report: false,
            savePath: "./build/reports/jasmine/",
            useDotNotation: true,
            consolidate: true
        }
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: ['src/**/*.coffee', 'spec/*.coffee'],
      tasks: 'coffee'
    },
    coffee: {
        compile: {
            files: {
                'lib/*.js': 'src/*.coffee',
                'lib/spec/*.js': 'src/spec/*.coffee'
            }
        }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');
  grunt.registerTask('test', 'jasmine_node');

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-coffee');

};
