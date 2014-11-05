pwd
rm dist/*.*
npm run package
cp node_modules/gardr-ext/iframe.html dist
cp lib/*.* dist
cp samples/*.html dist/
./node_modules/http-server/bin/http-server dist -p 1339 &
./node_modules/http-server/bin/http-server dist -p 1338 -d 
# -o