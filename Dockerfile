FROM node:16.14-alpine3.14

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@8.2.5

USER node

WORKDIR /home/node/app
