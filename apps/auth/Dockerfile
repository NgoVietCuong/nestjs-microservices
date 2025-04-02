FROM node:alpine as development

WORKDIR /app

RUN apk update && apk add --no-cache wget

COPY package.json .
COPY tsconfig.json .
COPY nest-cli.json .

RUN yarn install

COPY apps/auth apps/auth
COPY libs libs

RUN yarn run build auth

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json ./

RUN yarn install --production

COPY --from=development /app/dist ./dist

CMD ["node", "dist/apps/auth/main"]