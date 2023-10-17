#!/bin/bash

docker login -u ederlyncas

docker build -t ederlyncas/fibrasil-apisix-dashboard:latest .

docker push ederlyncas/fibrasil-apisix-dashboard:latest