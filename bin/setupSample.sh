rm dist/*.*
npm run package
cp node_modules/gardr-ext/iframe.html dist
cp src/*.* dist
cp samples/index.html dist
./node_modules/http-server/bin/http-server dist -p 1338 -d -o