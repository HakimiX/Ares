#!/bin/bash

echo 'The entrypoint script works...'

echo 'cloning repository...'

git clone https://github.com/HakimiX/Ares.git

echo 'done cloning'

echo "entering repo"
cd Ares
ls

#cd ~/pyscripts
#python3 ./deploy_applications.py
