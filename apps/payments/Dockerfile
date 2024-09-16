# Development stage
FROM node:alpine as development

WORKDIR /app

RUN apk update && apk add --no-cache wget

COPY package.json .

COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build