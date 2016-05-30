#!/usr/bin/env node

var commandLineCommands = require('command-line-commands'),
    commandLineArgs = require('command-line-args');

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
var validCommands = ['add'],
    options = [
        { name: 'start',   alias: 's', type: Number,  defaultValue: 0, description: 'Specify start value else 0', group: 'add'},
        { name: 'start',   alias: 's', type: Number,  defaultValue: 0, description: 'Specify start value else 0', group: 'add'},
        { name: 'help',    alias: 'h', type: Boolean, defaultValue: false },
        { name: 'version', alias: 'v', type: Boolean, defaultValue: false, group: 'main' }
    ],
    usage = {
        description: 'uses addition to test performance of parsing'
    },
    clc  = commandLineCommands(validCommands),
    argv = commandLineArgs(options).parse(clc.argv);

if (argv.version) {
    result('Version 0.0.1');
}

if (argv.help) {
    var getUsage = require('command-line-usage');
    result(getUsage(options, usage));juj
}

switch (clc.command.toLowerCase()) {
    case 'add':
        result(test(argv.start, argv.a, argv.b, argv.params[0], argv.params[1]));
        break;
    default:
        break;
}

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


