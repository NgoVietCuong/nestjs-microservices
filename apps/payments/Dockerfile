FROM node:alpine as development

WORKDIR /app

RUN apk update && apk add --no-cache wget

COPY package.json .
COPY tsconfig.json .
COPY nest-cli.json .

RUN yarn install

COPY apps/payments apps/payments
COPY libs libs

RUN yarn run build payments