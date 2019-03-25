FROM node:10-alpine

COPY ./package.json /app/package.json
COPY ./packages/api/package.json /app/packages/api/package.json
COPY ./packages/app/package.json /app/packages/app/package.json

COPY ./yarn.lock /app/yarn.lock

WORKDIR /app

RUN yarn --frozen-lockfile && yarn cache clean

#

COPY ./lerna.json /app/lerna.json
COPY ./packages /app/packages

ARG API_URL
ENV API_URL $API_URL

RUN yarn build
