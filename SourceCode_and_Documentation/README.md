# How to Initialise Frontend and Backend Locally

Run the init.sh in the shell

    sh init.sh

This will install everything you need to start. After this just
run these two commands in different shells for the backend and frontend.

Frontend:

    cd boba-me && npm start
Backend:

    cd backend && source venv/bin/activate && python api.py

You must run these two shells in paralell in order for all of this to work.

All prior backend port configuration was one, now you can start debugging the
frontend and backend together in sync whilst in debug mode.