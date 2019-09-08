FROM ubuntu

COPY server.js nodeapp/
WORKDIR "nodeapp/"

RUN apt-get update
RUN apt-get install -y iputils-ping
RUN apt-get install -y nodejs
RUN apt-get install -y npm