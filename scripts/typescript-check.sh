#!/bin/sh

trap "exit" INT
results=""
run() {
  echo "Run typescript check on $1"
  yarn workspace $1 run ts:check
  exit_status=$?
  echo ""
  if [ $exit_status -eq 0 ]; then
    if [ -z "$results" ]; then
      results="✅ Run typescript check on $1"
    else
      results="$results\n✅ Run typescript check on $1"
    fi
  else
    if [ -z "$results" ]; then
      results="❌ Run typescript check on $1"
    else
      results="$results\n❌ Run typescript check on $1"
    fi
  fi
}

run @noteto/nestjs-common 
run @noteto/server
run @noteto/web-client
run @noteto/shared

echo "$results"
