#!/usr/bin/env node

//https://www.npmjs.com/package/commander
var program  = require('commander'); 

/******************************************************
 * Helpers
 ******************************************************/
function result(data) {
    process.stdout.write(data + '\n');
    process.exit(0);
}

function add(a, b) {
    return a + b;
}

function test() {
    var args = Array.prototype.slice.call(arguments),
        def  = args.shift(); //removes first argument and returns it

    return args.reduce(add, def);
}

/******************************************************
 * Commands
 ******************************************************/
/**
 * Base command
 */
program
    .version('0.0.1')
    .command('add <a> <b> [params...]')
    .description('uses addition to test performance of parsing')
    .option('-s, --start <start>', 'Specify start value else 0', parseInt, 0)
    .action(function(a, b, params, options) {
        result(test(options.start, parseInt(a), parseInt(b), parseInt(params[0]), parseInt(params[1])));
    });

program
    .parse(process.argv);
