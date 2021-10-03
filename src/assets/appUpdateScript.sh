#!/bin/bash

## script used for pulling latest app artifacts out of s3 bucket and replacing
## existing app with updated version
## $1 - ui app name
## $2 - ui app version
## i.e., appUpdateScript.sh app-name 2.3.4

echo ===Update Start===

set -e

aws s3 cp --recursive s3://artifacts-$1-ui/$2 temp/
rm -rfv $1/
mv temp/ $1/
systemctl restart httpd

echo ===Update Completed
