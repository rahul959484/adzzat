#!/bin/sh
mkdir -p /logs/verifier
cd /app
cp /tests/grader.test.js /app/grader.test.js
if npm run test:grader; then
  echo 1 > /logs/verifier/reward.txt
else
  echo 0 > /logs/verifier/reward.txt
fi
rm -f /app/grader.test.js
