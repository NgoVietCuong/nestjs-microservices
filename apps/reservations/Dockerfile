# Development stage
FROM node:alpine as development

WORKDIR /app

RUN apk update && apk add --no-cache wget

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build


# Production stage
# FROM node:alpine as production

# ARG NODE_ENV=production

# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package.json ./

# COPY pnpm-lock.yaml ./

# RUN npm install -g pnpm

# RUN pnpm install --prod

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/apps/reservations/main"]