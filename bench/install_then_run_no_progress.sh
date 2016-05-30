#!/usr/bin/env bash

src="/data"
repeats=20
output_file='/results/bench.csv'
command_to_run='echo 1'

run_tests() {
    # --------------------------------------------------------------------------
    # Benchmark loop
    # --------------------------------------------------------------------------
    echo 'Benchmarking ' $command_to_run ' with ' $repeats ' iterations ...';
    # Indicate the command we just run in the csv file
    echo '======' $command_to_run ' with ' $repeats ' iterations ======' >> $output_file;
    start_time=`date +%s%N`

    # Run the given command [repeats] times
    for (( i = 1; i <= $repeats ; i++ ))
    do
        ${command_to_run} > /dev/null 2>&1
    done;

    end_time=`date +%s%N`
    let duration_millis=end_time-start_time
    let duration_millis/=1000000
    let duration_sec=$duration_millis/1000

    echo -ne '\n'

    # Convenience seperator for file
    echo 'Total Time: ' $duration_sec 'sec, ' $duration_millis 'millis'
    echo 'Total Time: ' $duration_sec 'sec, ' $duration_millis 'millis' >> $output_file
    echo '--------------------------' >> $output_file
}

# Option parsing
while getopts s:n:o:c: OPT
do
    case "$OPT" in
        s)
            src=$OPTARG
            ;;
        n)
            repeats=$OPTARG
            ;;
        o)
            output_file=$OPTARG
            output_file="/results/$output_file.csv"
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
