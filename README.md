# Ares 

Multi container application consisting of mulitple microservices and 
data sources. 

**Technologies**: Docker, Kubernetes, Helm, Nginx, React, Nodejs, Express, Graphql, Postgres,
Elasticsearch, Logstash, Kibana, and Google Cloud,

* [Overview](#overview)
* [Kubernetes](#kubernetes)
* [Local Development](#local-development)
* [CI/CD](#cicd)
  * [Travis CI](#travis-ci)
* [Deployment](#deployment)
  * [Google Cloud](#google-cloud)

### Overview
![](resources/images/overveiw.png)

#### person-server

#### company-server

#### posts-server

#### pour-server

### Kubernetes

### Local Development
#### Dockerfile
```shell
# Build image 
docker build -t person-server  -f ./person-server/Dockerfile.dev ./person-server

# Run container
docker run -p 5005:5005 person-server
```

#### Docker Compose
```shell
# Start containers
docker-compose up

# Stop containers 
docker-compose down
```

#### Postgres
Access the Postgres CLI inside the container: 
```shell
# Enter container
docker exec -it postgres /bin/sh

# Postgres CLI
psql --username postgres 

# Commands
$ \c dbname # switch connection to new database
$ \l        # list databases
$ \dt       # list tables 
```

### CI/CD
#### Travis CI

### Deployment
#### Google Cloud

### Source

* [Express JSON validation](https://simonplend.com/how-to-handle-request-validation-in-your-express-api/)
