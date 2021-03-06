#!/usr/bin/env node

var program = require('yargs');

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

var argv = program
    .version('0.0.1')
    .command(
        'add <a> <b> [params...]',
        'uses addition to test performance of parsing',
        function (yargs) { //options builder
            //https://www.npmjs.com/package/yargs#optionskey-opt
            return yargs.option('start', {
                alias: 's',
                describe: 'Specify start value else 0',
                default: 0,
                nargs: 1,
                type: 'number'
            })
        },
        function (argv) { //handler action
            result(test(argv.start, argv.a, argv.b, argv.params[0], argv.params[1]));
        }
    )
    .demand(3)
    //.alias('s', 'start').default('s', 0).describe('s', 'Specify start value else 0')
    .help('h').alias('h', 'help')
    .argv;


