#!/usr/bin/env bash

src="/data"
command_to_run='echo 1'

run_tests() {
    # --------------------------------------------------------------------------
    # Benchmark test
    # --------------------------------------------------------------------------
    echo 'Benchmarking Test ' $command_to_run ;

   ${command_to_run}

    echo '--------------------------'
}

# Option parsing
while getopts s:n:o:c: OPT
do
    case "$OPT" in
        s)
            src=$OPTARG
            ;;
        n)
            ;;
        o)
            ;;
        c)
            command_to_run=$OPTARG
            npm set progress=false
            npm install -g --production $src
            npm set progress=true
            run_tests
            ;;
        \?)
            echo 'No arguments supplied'
            exit 1
            ;;
    esac
done

shift `expr $OPTIND - 1`
