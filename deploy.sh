#!/usr/bin/env sh
set -e
rm -rf dist
yarn build &&
  cd dist &&
  git init &&
  git add -A &&
  git commit -m 'deploy' &&
  git push -f git@github.com:dwenge/kubaturnik.git master:gh-pages &&
  cd -
