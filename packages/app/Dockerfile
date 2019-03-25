ARG BASE_IMAGE=socialgouv/tremplin:master

FROM ${BASE_IMAGE} as tremplin-base-image

FROM node:10-alpine

WORKDIR /app

COPY --from=tremplin-base-image /app/packages/app/next.config.js/app/next.config.js
COPY --from=tremplin-base-image /app/packages/app/static /app/static
COPY --from=tremplin-base-image /app/packages/app/package.json /app/package.json
COPY --from=tremplin-base-image /app/packages/app/.next /app/.next

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
