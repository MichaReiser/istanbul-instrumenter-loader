'use strict';

var istanbulLibInstrument = require('istanbul-lib-instrument');
var loaderUtils = require('loader-utils');
var assign = require('object-assign');

var defaultOptions = {
    autoWrap: true
};

module.exports = function(source, sourceMap) {
    var userOptions = loaderUtils.parseQuery(this.query);
    var instrumenter = istanbulLibInstrument.createInstrumenter(
        assign({ produceSourceMap: this.sourceMap }, defaultOptions, userOptions)
    );

    if (this.cacheable) {
        this.cacheable();
    }

    var that = this;
    return instrumenter.instrument(source, this.resourcePath, function (error, source) {
        that.callback(error, source, instrumenter.lastSourceMap());
    });
};
