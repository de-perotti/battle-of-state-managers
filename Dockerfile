FROM node:fermium-alpine

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3333
EXPOSE 4200

CMD ["yarn", "serve:hubs:main"]
