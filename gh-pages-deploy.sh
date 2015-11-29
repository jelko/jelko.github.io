#!/bin/bash
cd build
git init
git config user.name "Travis-CI"
git config user.email "travis@jelkoarnds.com"
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/jelko/jelko.github.io" master:master > /dev/null 2>&1