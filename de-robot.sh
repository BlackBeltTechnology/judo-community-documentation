#!/bin/bash

rm -f ./build/sitemap.xml
rm -f ./build/robots.txt
cp ./src/main/resources/robots.txt ./build

rm -f ./build/judo/robots.txt
cp ./src/main/resources/robots.txt ./build/judo
