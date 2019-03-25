# Tremplin

> Rapprocher les professionnels de santé de leur futur territoire d’exercice

## Install

```sh
# Install all the packages
$ yarn
```

## Build

```sh
# Build all the packages
$ yarn build

# Build the "<package-name>"
$ yarn workspace <package-name> build

# For example for "api"
$ yarn workspace @tremplin/api build
```

## Prod

### Local production images

```sh
# Build a local version of the "master" image (with all deps and builds)
$ docker build . -t socialgouv/tremplin:master

# Build images

# Build a local version of the "socialgouv/tremplin-api:latest"
$ docker build -t socialgouv/tremplin-api:latest packages/api
# or
$ docker build -t socialgouv/tremplin-api:latest --build-arg BASE_IMAGE=socialgouv/tremplin:master packages/api
# or
$ docker-compose build tremplin-api

# Same for "socialgouv/tremplin-app:latest"
$ docker-compose build tremplin-app
# etc...

# Run images

$ docker-compose up
```
