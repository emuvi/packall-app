#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Devs/run/app/packall-app
mkdir ~/Devs/run/app/packall-app
cd public
cp -r * ~/Devs/run/app/packall-app
cd ..
