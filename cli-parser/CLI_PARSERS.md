# CLI Parsers

## Candidates

### [Commander](https://www.npmjs.com/package/commander)

- simpler interface
- easier to write commands
- 3x faster then yargs

### [Yargs](https://www.npmjs.com/package/yargs)

- more flexible and powerful
- more complex to write commands
- slow

### [argparse](https://www.npmjs.com/package/argparse)

- ported from a python library
- more complex to write commands (more procedural)
- slightly slower then Commander

## Test Criteria

- a globally installed CLI command on the latest official `node:4` docker container
- 1 subcommand (git style)
- 2 required integer parameters
- 1 trailing variadic integer parameter where we inject 3 parameters and only use 2
- one option `-s` alias `--start` with a default of 0 and specified as 10 during the test.
- must have `-h` alias `--help` with generated usage docs.

## Issues

### What about minimal parsers?

[minimist](https://www.npmjs.com/package/minimist)
and [command-line-args](https://www.npmjs.com/package/command-line-args).
Even with additional help like
[command-line-usage](https://www.npmjs.com/package/command-line-usage)
and [command-line-commands](https://www.npmjs.com/package/command-line-commands)
it's still not flexible enough to get the test case without a lot of custom code.

- may be able to use meow and minimist in combination
