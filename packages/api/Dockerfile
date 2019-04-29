ARG NODE_VERSION=10.15.3

FROM node:${NODE_VERSION}

ENV PORT=1337

COPY . ./app
WORKDIR /app
RUN yarn
RUN yarn build

EXPOSE ${PORT}

CMD [ "yarn", "start"]
