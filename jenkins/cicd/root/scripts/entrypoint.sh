#!/bin/bash

# This script is meant for additional bootstrapping.

echo 'The entrypoint script works...'

echo 'content of image...'
echo 'homefolder content...'
cd ~
ls -a

echo "content of .kube"
ls .kube

echo "environment variables"
env

echo 'cloning repository...'

git clone https://github.com/HakimiX/Ares.git

echo 'done cloning, repo content'
ls Ares

cd ~/pyscripts
python3 ./deploy_applications.py
