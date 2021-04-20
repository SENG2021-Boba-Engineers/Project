#!/bin/bash

# Assumes python3 and npm installed on unix system
# This is to test from the home

# Install virtual environment if not there
if !(test -d backend/venv)
then
    cd backend
    pip3 install virtualenv 2> /dev/null
    virtualenv venv
    source virtualenv/bin/activate
    pip install -r requirements.txt 2> /dev/null
    deactivate
else
    cd backend
    source virtualenv/bin/activate
    pip install -r requirements.txt 2> /dev/null
    deactivate
fi
cd ..

# Install packages frontend
cd boba-me
npm install 2> /dev/null