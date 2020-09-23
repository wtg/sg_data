FROM node:12 as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY ./ .

EXPOSE 3000

FROM build as develop

RUN npm install -g nodemon
