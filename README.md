# Crappy Node Benchmarks

This is a personal repo I use to do simplistic benchmarks on competing node
libraries when performance is a criteria.

Pull requests for modifications and additional libraries are welcome,
but the testing criteria must be the exact same as the competing libraries.

_Why Crappy?_ Because it's simplistic and to cover the a common use case, not all use cases.
I also use the word crappy liberally, I don't mean to offend the library authors,
and every single one should be given credit for the effort they spend on these libraries.

## Results

### CLI parsers

1000 iterations of `x-bench add -s 10 1 3 5 7 11`:
- [Yargs](https://www.npmjs.com/package/yargs): `123 sec,  123680 millis`
- [Commander](https://www.npmjs.com/package/commander): `46 sec,  46648 millis`

[More details](cli-parser/CLI_PARSERS.md)

Run `docker-compose -f docker-dir/cli-parsers-compose.yml`

# Improvements

- Run on multiple Node versions, not just Node 4.
It's unfair to criticize a libraries performance
based on how it operates on an old version of a language,
when it could very well leverage new functionality in newer versions.