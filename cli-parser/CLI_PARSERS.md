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

### [WIP] command-line-*

Comprised of (in order to match functionality):
- [command-line-args](https://www.npmjs.com/package/command-line-args)
- [command-line-usage](https://www.npmjs.com/package/command-line-usage)
- [command-line-commands](https://www.npmjs.com/package/command-line-commands)

Still in progress

### Test Criteria

- a globally installed CLI command on the latest official `node:4` docker container
- 1 subcommand (git style)
- 2 required parameters
- 1 trailing variadic parameter where we inject 3 parameters and only use 2
- one option `-s` alias `--start` with a default of 0 and specified as 10 during the test.
- must have `-h` alias `--help` with generated usage docs.

# Issues

What about minimal CLI parsers? like [minimist](https://www.npmjs.com/package/minimist)

