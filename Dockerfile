FROM node:fermium-alpine AS dev
RUN apk add postgresql-client
WORKDIR /app
EXPOSE 3333
EXPOSE 4200

FROM node:fermium-alpine AS builder
COPY . .
RUN yarn
CMD ["yarn", "serve:hubs:main"]
