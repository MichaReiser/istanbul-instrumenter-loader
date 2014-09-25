## Istanbul instrumenter loader for [webpack](https://webpack.github.io/)

[![travis](http://img.shields.io/travis/deepsweet/istanbul-instrumenter-loader.svg?style=flat-square)](https://travis-ci.org/deepsweet/istanbul-instrumenter-loader)
[![npm](http://img.shields.io/npm/v/istanbul-instrumenter-loader.svg?style=flat-square)](https://www.npmjs.org/package/istanbul-instrumenter-loader)
[![peer deps](http://img.shields.io/david/peer/deepsweet/istanbul-instrumenter-loader.svg?style=flat-square)](https://david-dm.org/deepsweet/istanbul-instrumenter-loader#info=peerDependencies)
[![dev deps](http://img.shields.io/david/dev/deepsweet/istanbul-instrumenter-loader.svg?style=flat-square)](https://david-dm.org/deepsweet/istanbul-instrumenter-loader#info=devDependencies)
![unicorn approved](http://img.shields.io/badge/unicorn-approved-ff69b4.svg?style=flat-square)

Instrument JS files with [Istanbul](https://github.com/gotwarlost/istanbul) for subsequent code coverage reporting.<br/>
"Forked" from [unfold/istanbul-instrument-loader](https://github.com/unfold/istanbul-instrument-loader).

### Install

```sh
npm i -S istanbul-instrumenter-loader
```

### Usage

Useful to get work together [karma-webpack](https://github.com/webpack/karma-webpack) and [karma-coverage](https://github.com/karma-runner/karma-coverage). For example:

1. [karma-webpack config](https://github.com/webpack/karma-webpack#karma-webpack)
2. [karma-coverage config](https://github.com/karma-runner/karma-coverage#configuration)
3. replace `karma-coverage`'s code instrumenting with `istanbul-instrumenter-loader`'s one:

```javascript
config.set({
    ...
    files: [
      // 'src/**/*.js', << you don't need this anymore
      'test/**/*.js'
    ],
    ...
    preprocessors: {
        // 'src/**/*.js': ['coverage'] << and this too
        'test/**/*.js': [ 'webpack' ]
    },
    reporters: [ 'progress', 'coverage' ],
    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },
    ...
    webpack: {
        ...
        module: {
            preLoaders: [ { // << add istanbul-instrumenter-loader as webpack's preloader
                test: /\.js$/,
                exclude: /(test|node_modules|bower_components)\//,
                loader: 'istanbul-instrumenter-loader'
            } ],
            loaders: [ ... ]
        },
        ...
    }
});
```

[Documentation: Using loaders](https://webpack.github.io/docs/using-loaders.html).

### License
[WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-strip.jpg)