#!/bin/sh

trap "exit" INT
results=""
run() {
  echo "Run lint on $1"
  yarn workspace $1 run lint
  exit_status=$?
  echo ""
  if [ $exit_status -eq 0 ]; then
    if [ -z "$results" ]; then
      results="✅ Run lint on $1"
    else
      results="$results\n✅ Run lint on $1"
    fi
  else
    if [ -z "$results" ]; then
      results="❌ Run lint on $1"
    else
      results="$results\n❌ Run lint on $1"
    fi
  fi
}

run @noteto/server --max-warnings 0
run @noteto/web-client --max-warnings 0
run @noteto/shared --max-warnings 0

echo "$results"
