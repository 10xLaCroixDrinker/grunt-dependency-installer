/*
 * grunt-dependency-installer
 * https://github.com/jking90/grunt-dependency-installer
 *
 * Copyright (c) 2013 Jimmy King
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    childProcess = require('child_process');

module.exports = function(grunt) {

  grunt.registerTask('dependency_installer', 'A Grunt plugin for installing dependancies to node modules stored in the plugins directory', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pluginsDir: 'plugins'
    }),
        done = this.async(),
        plugins = [],
        cmdOpts = {
          cwd: process.cwd(),
          env: process.env
        };

    // Install dependencies
    var npmInstall = function(thisPackage, callback) {
      var cd = 'cd ' + process.cwd() + '/' + options.pluginsDir + '/' + thisPackage,
          command = cd + ' && npm install';

      childProcess.exec(command, cmdOpts,function(err, stdout, stderr) {
        if (err) throw err;
        grunt.verbose.writeln(stdout);
        grunt.log.oklns('Installed ' + thisPackage + '\'s dependencies');
        if (thisPackage === plugins[plugins.length - 1]) {
          done();
        }
      });
    };

    // Walk through pluginsDir
    fs.readdir(process.cwd() + '/' + options.pluginsDir, function (err, files) {
      if (err) throw err;

      plugins = files;

      for (var i = 0; i < plugins.length; i++) {
        grunt.log.writeln('Installing ' + plugins[i] + '\'s dependencies');
        npmInstall(plugins[i]);
      }
    });
  });
};
