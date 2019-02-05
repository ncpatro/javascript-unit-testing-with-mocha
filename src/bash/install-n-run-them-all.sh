#!/usr/bin/env bash
# file: src/bash/run-them-all.sh


which mocha 2>/dev/null || \
   { echo >&2 "The mocha is missing - \"sudo npm install -g --save-dev mocha \" ! Aborting ..."; exit 1; }
# which chai 2>/dev/null || \
 #  { echo >&2 "The chai is missing - \"sudo npm install -g --save-dev chai \" ! Aborting ..."; exit 1; }

run_unit_bash_dir=$(perl -e 'use File::Basename; use Cwd "abs_path"; print dirname(abs_path(@ARGV[0]));' -- "$0")
cd $run_unit_bash_dir ; for i in {1..2} ; do cd .. ; done ; export proj_root_dir=`pwd`;

while read -r d ; do
   echo -e "cd to dir: $d"
   cd $d
   echo -e "installing packages for dir $d: \n"
   sleep 1
   npm install
   printf "\033[2J";printf "\033[0;0H" # clear the screen

   echo -e "test dir $d \n"
   sleep 1
   npm test
   sleep 4
   printf "\033[2J";printf "\033[0;0H" # clear the screen
done < <(find $proj_root_dir -type d -name '0*-*'|sort)
