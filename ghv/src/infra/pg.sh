#!/bin/bash
# usage: pg.sh file regex  -> page:line
awk -v re="$2" 'BEGIN{p=1} {n=gsub(/\f/,"&"); if($0 ~ re) print "p"p": "substr($0,1,200); p+=n}' "$1"
