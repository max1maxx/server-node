FROM node:20-alpine AS base

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./controllers ./controllers
COPY ./models ./models
COPY ./routes ./routes

COPY ./database.js ./database.js
COPY ./index.js ./index.js
COPY ./index.html ./index.html

USER node

EXPOSE 3000

CMD ["node", "index.js"]

