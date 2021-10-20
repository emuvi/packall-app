tsc -p tsconfig.json
browserify src/index.js --debug -o public/index.js
rm -rf ../qinpel-dsk/run/app/packall
mkdir ../qinpel-dsk/run/app/packall
cd public
cp -r * ../../qinpel-dsk/run/app/packall/
cd ..