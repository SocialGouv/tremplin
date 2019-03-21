#!/bin/bash

SCRIPTS_BUILD_MODULE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SCRIPTS_BUILD_DIR="$( cd "$( dirname "${SCRIPTS_BUILD_MODULE_DIR[0]}" )" && pwd )"
SCRIPTS_DIR="$( cd "$( dirname "${SCRIPTS_BUILD_DIR[0]}" )" && pwd )"
ROOT_DIR="$( cd "$( dirname "${SCRIPTS_DIR[0]}" )" && pwd )"

source $SCRIPTS_BUILD_DIR/stack.env.sh
if [[ $? -ne 0 ]] ; then
    exit 1
fi

for i in "$@"
do
    case $i in
        --version=*)
            DOCKER_IMAGE_TAG="${i#*=}"
            shift # past argument=value
        ;;
        --push=*)
            DOCKER_PUSH="1"
            shift # past argument=value
        ;;
         --quiet)
            DOCKER_BUILD_QUIET="--quiet=true"
            shift # past argument=value
        ;;
          --registry-image=*)
            DOCKER_REGISTRY_IMAGE="${i#*=}"
            shift # past argument=value
        ;;
        *)
            # unknown option
            echo
            echo ""
            echo "[ERROR] Unknown option "${i}""
            echo ""
            exit 1
        ;;
    esac
done

if [ -z $DOCKER_IMAGE_TAG ]
then
    echo "-----------------------------------"
    echo "Use --version tag:"
    echo ""
    echo "$0 --version=latest --push=1 --quiet"
    echo "$0 --version=2.1"
    echo ""
    exit 1
fi

if [ -z $DOCKER_REGISTRY_IMAGE ]
then
    echo "-----------------------------------"
    echo "Use --registry-name tag:"
    echo ""
    echo "$0 --registry-name=registry.gitlab.factory.social.gouv.fr/socialgouv/tremplin"
    echo ""
    exit 1
fi

MODULE_NAME=app
DOCKER_IMAGE_NAME=$DOCKER_REGISTRY_IMAGE/$MODULE_NAME

echo ""
echo "###################################################################################"
echo ""
echo "$0 --version=$DOCKER_IMAGE_TAG --registry-name=$DOCKER_REGISTRY_IMAGE"
echo ""
echo "###################################################################################"
echo ""

# set -x
docker build $DOCKER_BUILD_QUIET \
    --build-arg IMAGE_VERSION=$DOCKER_IMAGE_TAG \
    --build-arg DOCKER_REGISTRY_IMAGE=$DOCKER_REGISTRY_IMAGE \
    -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG \
    -f $SCRIPTS_BUILD_MODULE_DIR/${MODULE_NAME}.build.dockerfile \
    $ROOT_DIR \

if [[ $? -ne 0 ]] ; then
    exit 1
fi

if [ "$DOCKER_PUSH" == "1" ]
then
    docker push $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG
    if [[ $? -ne 0 ]] ; then
        exit 1
    fi
fi
