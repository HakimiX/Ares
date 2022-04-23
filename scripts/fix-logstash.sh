#!/bin/bash

DIR="logstash"
cd /tmp

# Check if directories already exist
if [ -d "$DIR" ]; then
  echo "${DIR} dir already exists"
else
  # Create the directories and give permission
  echo "Created /logstash and /logstash/queue."

  mkdir logstash
  mkdir logstash/queue

  # Give read/write permissions
  chmod o+rw logstash
  chmod o+rw logstash/queue
  exit 1
fi
