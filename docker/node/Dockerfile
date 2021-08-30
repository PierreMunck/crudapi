FROM node:14

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install

COPY . .

EXPOSE 8080