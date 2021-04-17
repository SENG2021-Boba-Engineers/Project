#!/bin/sh

# Assumes python3 and npm installed on unix system
# This is to test from the home

# Install virtual environment if not there
if !(test -d backend/venv)
then
    cd backend
    pip3 install venv 2> /dev/null
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt 2> /dev/null
    deactivate
else
    cd backend
    source venv/bin/activate
    pip install -r requirements.txt 2> /dev/null
    deactivate
fi
cd ..

# Install packages frontend
cd boba-me
npm install 2> /dev/null
