#!/bin/bash


echo "run mongo"

tmux 
mongod --dbpath database
exit

tmux
cd frontend
npm start
exit

tmux 
cd backend
node app.js
exit
