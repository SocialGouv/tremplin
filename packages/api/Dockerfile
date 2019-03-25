ARG BASE_IMAGE=socialgouv/tremplin:master

FROM ${BASE_IMAGE} as tremplin-base-image

FROM node:10-alpine

WORKDIR /app

COPY --from=tremplin-base-image /app/packages/api/dist /app/dist
COPY --from=tremplin-base-image /app/packages/api/package.json /app/package.json

EXPOSE 1337

ENTRYPOINT [ "yarn", "start" ]
