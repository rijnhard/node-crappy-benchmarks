# [WIP untested] Config Parsers

## [Nconf](https://www.npmjs.com/package/nconf)

- Crappy dependencies on `yargs` and `ini`
    - not modular enough, you shouldn't need `yargs` if you aren't going to allow cli parameters.
     (lazy loading can make this a moot point, but still its another dependency thats downloaded)
    - yargs is pretty slow at the moment
    - `ini` is fine on its own, but if the the results aren't cached then the ini file is reparsed every time, and that is slow.

## [Convict](https://www.npmjs.com/package/convict)

- Crappy dependencies on `optimist` (deprecated predecessor to yargs, which is slow)
    - optimist was dropped for minimist [v1.4.0](https://github.com/mozilla/node-convict/issues/149)

# References

[Nodejitsu](https://blog.nodejitsu.com/npmawesome-managing-app-configuration-with-convict)