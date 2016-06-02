# [WIP untested] Config Parsers

## Candidates

### [Nconf](https://www.npmjs.com/package/nconf)

- Crappy dependencies on `yargs` and `ini`
    - not modular enough, you shouldn't need `yargs` if you aren't going to allow cli parameters.
     (lazy loading can make this a moot point, but still its another dependency thats downloaded)
    - yargs is pretty slow at the moment (and this slows down nconf ONLY if using command line args)
    - `ini` is fine on its own, but if the the results aren't cached then the ini file is reparsed every time, and that is slow.
- doesn't do type coercion for env vars

### [Convict](https://www.npmjs.com/package/convict)

- Crappy dependencies on `optimist` (deprecated predecessor to yargs, which is slow)
    - optimist was dropped for minimist [v1.4.0](https://github.com/mozilla/node-convict/issues/149)
- non configurable precedence.
- some non obvious oddity with `loadFile`

## Tests

### Test 1: Multiple files, with env and CLI override

- a globally installed CLI command on the latest official node:4 docker container
- use 4 configurations
    - system defined config file `system.json`
    - user specific config file  `config.json`
    - environment variables
    - a config key override in command line
- 5 configuration keys that are defined and overridden in the following way.
    1. default all to 0
    2. `system.json`
        - `{"a": 1, "b": 3, "c": 5, "d": 7}`
    3. `config.json`
        - `{"b": 11, "c": 13}`
    4. env (we specify env here because it's not configurable in convict)
        - `d=0`
        - `e=99`
    5. CLI override
        - `-c 19 -d 23`
- Results:
    - a: 1
    - b: 11
    - c: 19
    - d: 23
    - e: 99
    - Total = 153

### Test 2: Multiple files, no env, CLI override

- a globally installed CLI command on the latest official node:4 docker container
- use 2 configurations
    - system defined config file `system.json`
    - user specific config file  `config.json`
- 5 configuration keys that are defined and overridden in the following way.
    1. default all to 0
    2. `system.json`
        - `{"a": 1, "b": 3, "c": 5, "d": 7}`
    3. `config.json`
        - `{"b": 11, "c": 13}`
- Results:
    - a: 1
    - b: 11
    - c: 13
    - d: 7
    - e: 0
    - Total = 32

## Conclusion

Both are pretty equivalent with nconf without CLI commands being the fastest,
and if CLI commands are used nconf is the slowestr, but that is yargs parser
(which they are investigating on improving).
Convict is unaffected/consistent no matter on CLI commands.

## References

[Nodejitsu](https://blog.nodejitsu.com/npmawesome-managing-app-configuration-with-convict)