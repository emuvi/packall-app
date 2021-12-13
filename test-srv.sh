bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Wizard/run/app/packall-app
mkdir ~/Wizard/run/app/packall-app
cd public
cp -r * ~/Wizard/run/app/packall-app
cd ..
