# Crappy Node Benchmarks

This is a personal repo I use to do simplistic benchmarks on competing node
libraries when performance is a criteria.

Pull requests for modifications and additional libraries are welcome,
but the testing criteria must be the exact same as the competing libraries.

_Why Crappy?_ Because it's simplistic and to cover the a common use case, not all use cases.
I also use the word crappy liberally, I don't mean to offend the library authors,
and every single one should be given credit for the effort they spend on these libraries.

## Results

| Category | Candidate | Test No. | Iterations | Sec | Millis |
| -------- | -------- | -------- | -------- | -------- | -------- |
| CLI | Yargs | 1 | 1000 | `123 sec` | `123680 millis` |
| CLI | Commander | 1 | 1000 | `46 sec` | `46648 millis` |
| CLI | argparse | 1 | 1000 | `57 sec` | `57982 millis` |
| Config | Convict | 1 | 1000 | `89 sec` | `89192 millis` |
| Config | Convict | 2 | 1000 | `88 sec` | `88116 millis` |
| Config | Nconf | 1 | 1000 | `109 sec` | `109839 millis` |
| Config | Nconf | 2 | 1000 | `72 sec` | `72314 millis` |


### CLI parsers

1000 iterations of `<candidate>-bench add -s 10 1 3 5 7 11`:
- [Yargs](https://www.npmjs.com/package/yargs): `123 sec,  123680 millis`
- [Commander](https://www.npmjs.com/package/commander): `46 sec,  46648 millis`
- [argparse](https://www.npmjs.com/package/argparse): `57 sec,  57982 millis`

[More details](cli-parser/CLI_PARSERS.md)

Run `docker-compose -f docker-dir/cli-parsers-compose.yml`

### Config parsers

1000 iterations of `<candidate>-bench<testNumber> -c 19 -d 23`:
- [Convict](https://www.npmjs.com/package/convict):
    - Test 1: Multiple files, with env and CLI override: `89 sec,  89192 millis`
    - Test 2: Multiple files, no env or CLI override: `88 sec,  88116 millis`
- [Nconf](https://www.npmjs.com/package/nconf):
    - Test 1: Multiple files, with env and CLI override: `109 sec,  109839 millis`
    - Test 2: Multiple files, no env or CLI override: `72 sec,  72314 millis`

[More details](config-parser/CONFIG_PARSERS.md)

Run `docker-compose -f docker-dir/config-parsers-compose.yml`

# Improvements

- Run on multiple Node versions, not just Node 4.
It's unfair to criticize a libraries performance
based on how it operates on an old version of a language,
when it could very well leverage new functionality in newer versions.