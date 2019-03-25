ARG BASE_IMAGE=socialgouv/tremplin:master

FROM ${BASE_IMAGE} as tremplin-base-image

FROM nginx:1.13-alpine

COPY --from=tremplin-base-image /app/packages/app/out /www

COPY packages/app/nginx.conf /etc/nginx/nginx.conf
