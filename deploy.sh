#!/usr/bin/env sh

set -e

cd frontend

npm run generate

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:berserg2010/ClearStump.git master:gh-pages

cd -
