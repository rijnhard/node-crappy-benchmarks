#!/usr/bin/env node

//https://www.npmjs.com/package/argparse
var ArgumentParser  = require('argparse').ArgumentParser;

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
var progConst = require('argparse/lib/const'),
    program = new ArgumentParser({
        version: '0.0.1',
        addHelp: true,
        description: 'uses addition to test performance of parsing'
    }),
    subcommands = program.addSubparsers({
        title:'subcommands',
        dest: 'sub'
    }),
    addSub = subcommands.addParser('add', {addHelp:true});

addSub.addArgument(
    [ '-s', '--start' ],
    {
        help: 'Specify start value else 0',
        defaultValue: 0,
        type: 'int'
    }
);

addSub.addArgument(
    ['a'],
    {
        type: 'int'
    }
);

addSub.addArgument(
    ['b'],
    {
        type: 'int'
    }
);

addSub.addArgument(
    [ 'params' ],
    {
        nargs: progConst.REMAINDER,
        type: 'int'
    }
);

var args = program.parseArgs();

switch (args.sub) {
    case 'add':
        result(test(args.start, args.a, args.b, args.params[0], args.params[1]));
        break;
    default: break;
}