ARG NODE_VERSION=10.15.3
ARG NGINX_VERSION=1.12-alpine

ENV API_URL=http://localhost:1337/api
ENV PORT=80

FROM node:${NODE_VERSION} as builder

COPY . ./app
WORKDIR /app
RUN yarn
RUN yarn build
RUN yarn export

FROM nginx:${NGINX_VERSION}
COPY --from=builder /app/out/ /usr/share/nginx/html

EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]
