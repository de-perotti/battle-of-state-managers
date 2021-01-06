FROM node:fermium-alpine

WORKDIR /app

COPY . .

RUN yarn

CMD ["yarn", "serve:hubs:main"]
