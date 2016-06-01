#!/usr/bin/env node

var nconf = require('nconf');

/******************************************************
 * Helpers
 ******************************************************/
function result(data) {
    process.stdout.write(data + '\n');
    process.exit(0);
}

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function test() {
    var args = Array.prototype.slice.call(arguments),
        def  = args.shift(); //removes first argument and returns it

    return args.reduce(add, def);
}

/******************************************************
 * Configuration
 * https://www.npmjs.com/package/nconf
 * nconf is configured in order of first takes highest priority
 ******************************************************/

nconf
    .file('user', '../config-dir/config.json')
    .file('system', '../config-dir/system.json')
    .defaults({
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0
    });

var a = nconf.get('a'),
    b = nconf.get('b'),
    c = nconf.get('c'),
    d = nconf.get('d'),
    e = nconf.get('e');

result(test(a,b,c,d,e));