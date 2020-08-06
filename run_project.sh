#!/usr/bin/env bash

cd ./frontend || exit
sh build_frontend.sh

cd ../docker || exit
docker-compose up -d
docker-compose exec php composer install