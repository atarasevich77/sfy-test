#!/usr/bin/env bash

nodeContainerName='node:latest'

docker pull $nodeContainerName
docker run -it --rm --name build_frontend -v "$PWD":/usr/src/app -w /usr/src/app $nodeContainerName npm i &&
 npm run build
