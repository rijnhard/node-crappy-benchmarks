#!/usr/bin/env node

var convict = require('convict');

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
 *  https://www.npmjs.com/package/convict
 *  in convict the order is predefined and not modifiable
 *      Default value
 *      File (config.loadFile())
 *      Environment variables
 *      Command line arguments
 *      Set and load calls (config.set() and config.load())
 ******************************************************/

var conf = convict({
    a: {
        format: Number,
        default: 0,
        env: 'a',
        arg: 'a'
    },
    b: {
        format: Number,
        default: 0,
        env: 'b',
        arg: 'b'
    },
    c: {
        format: Number,
        default: 0,
        env: 'c',
        arg: 'c'
    },
    d: {
        format: Number,
        default: 0,
        env: 'd',
        arg: 'd'
    },
    e: {
        format: Number,
        default: 0,
        env: 'e',
        arg: 'e'
    }
});

/*
    oddly specifying both in one loadFile breaks.
        conf.loadFile('../config-dir/config.json', '../config-dir/system.json'); == 152, causes 'a' to be 0.
        conf.loadFile('../config-dir/system.json', '../config-dir/config.json'); == 145, so apparently the first param takes priority
    since I speculate it reapplies defaults.
 */

conf.loadFile('../config-dir/system.json');
conf.loadFile('../config-dir/config.json');

var a = conf.get('a'),
    b = conf.get('b'),
    c = conf.get('c'),
    d = conf.get('d'),
    e = conf.get('e');

result(test(a,b,c,d,e));