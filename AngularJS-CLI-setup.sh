#!/bin/bash
wget https://github.com/rcodonnell/AngularJS-CLI/archive/master.zip 
printf "Unzipping...\n"
unzip master.zip
rm master.zip
# Removing files that are not necessary for a user's project
rm AngularJS-CLI-master/README.md
rm AngularJS-CLI-master/LICENSE
rm AngularJS-CLI-master/.travis.yml
mv AngularJS-CLI-master/* .
mv AngularJS-CLI-master/.* .
rm -rf AngularJS-CLI-master/
npm install
printf "Done!"
