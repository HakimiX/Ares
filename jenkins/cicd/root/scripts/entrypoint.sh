#!/bin/bash
# This script is meant for additional bootstrapping.

echo 'content of image...'
echo 'homefolder content...'
cd ~
ls -a

echo "content of kube directory"
ls ~/.kube

echo "content of kube/config"
cat ~/.kube/config

#echo "content of client dir"
#ls -a client

echo "environment variables"
env

echo 'cloning repository...'

git clone https://github.com/HakimiX/Ares.git

echo 'done cloning, repo content'
ls Ares

cd ~/pyscripts
python3 ./deploy_applications.py
