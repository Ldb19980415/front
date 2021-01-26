#!/bin/bash

docker build -t sharelife:v0 .
docker rm -f `docker ps -aq --filter name=sharelife`
docker run -d --name=sharelife -p 80:80 sharelife:v0