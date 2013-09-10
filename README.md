# grunt-dependency-installer

> A Grunt plugin for installing dependancies to node modules stored in the plugins directory

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dependency-installer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dependency-installer');
```

## The "dependency_installer" task

### Overview
This plugin runs an npm install for your node modules that aren't being managed by npm.

In your project's Gruntfile, add a section named `dependency_installer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dependency_installer: {
    options: {
      pluginDir: 'plugins'
    }
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `'plugins'`

Relative path to your private plugins.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
