# Ares 

Multi container application consisting of mulitple microservices and 
data sources. 

**Technologies**: Docker, Kubernetes, Helm, Nginx, React, Nodejs, Express, Graphql, Postgres,
MongoDB, Elasticsearch, Logstash, Kibana, and Google Cloud,

* [Overview](#overview)
* [Components](#components)
  * [Nginx](#nginx) 
  * [address-server](#address-server)
  * [person-server](#person-server)
  * [company-server](#company-server)
  * [posts-server](#posts-server)
  * [pour-server](#pour-server)
  * [Elasticsearch](#elasticsearch)
  * [Logstash](#logstash)
  * [Postgres](#postgres)
  * [MongoDB](#mongodb)
* [Local Development](#local-development)
* [CI/CD](#cicd)
  * [Travis CI](#travis-ci)
* [Deployment](#deployment)
  * [Kubernetes](#kubernetes)
  * [Google Cloud](#google-cloud)

### Overview
![](resources/images/overview.png)

### Components

#### Nginx
The nginx web server accepts requests from a client, forwards the request to a server 
that can fullfill it, and returns the response from the server to the client.
```shell
# Client running on
http://localhost:8888

# Upstream person-server
http://localhost:8888/api/person/all

# Upstream address-server
http://localhost:8888/api/address/all

# Upstream company-server 
http://localhost:8888/api/company/all
```

#### address-server
Express Server that fetches addresses from the MongoDB database.
```shell
# Running on 
http://localhost:5007

# Endpoints
/address/all
/address/:id
```

#### person-server
Express Server that fetches persons from the Postgres database.
```shell
# Running on 
http://localhost:5005

# Endpoints
/person/all
/person/:id
```

#### company-server
Express Server that fetches companies from Elasticsearch.
```shell
# Running on 
http://localhost:5008

# Endpoints
/company/all
/company/:id
```

#### posts-server

#### pour-server
Express Server that fetches data from an external API and populates pieces
of that data into three different data sources (MongoDB, Postgres and Elasticsearch).
```shell
# Running on 
http://localhost:5006

# Endpoints
/pour/all       # populates all data sources
/pour/address   # populates MongoDB
/pour/person    # populates Postgres
/pour/company   # populates Elasticsearch
```

#### Elasticsearch
Elasticsearch is used to store, search, and manage data for the company-server (express server).

Obtaining Elasticsearch for Docker is as simply as issuing a `docker pull` command 
against the Elastic Docker registry: 
```shell
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.10.2
```
Docker Compose is used to start a multi-node Elasticsearch cluster in Docker. This configuration
provides a simple method of starting a secured cluster for development before building 
a distributed deployment with multiple hosts. 

Communication with Elasticsearch is done through the Index API's which are used to manage individual 
indices, index settings, aliases, mappings, and index templates.
```shell
# Container running 
http://localhost:9200

# Create index
PUT /<index>

# Get index
GET /<target>

# Delete index
DELETE /<index>
```

![](resources/images/elasticsearch/elastisearch.png)

Elasticsearch provides a full Query DSL (Domain Specific Language) based on JSON to define queries.
![](resources/images/elasticsearch/elasticsearch-query.png)

#### Logstash 
Logstash is a service-side data processing pipeline that ingests data and 
persists it in Elasticsearch. 

Run the following script in order to run Logstash with Docker Compose for local development
```shell
# Creates a 'logstash/query' directory in 'tmp' with read/write permissions 
./scripts/fix-logstash.sh
```

#### Postgres
Access the Postgres CLI inside the container:
```shell
# Enter container
docker exec -it postgres /bin/sh

# Postgres CLI
psql --username postgres 

# Commands
$ \c <dbname>   # switch connection to new database
$ \l            # list databases
$ \dt           # list table
$ \d+ <table>   # describe table
```

#### MongoDB

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

### CI/CD
#### Travis CI

### Deployment

#### Kubernetes

#### Google Cloud

### Source

* [Express JSON validation](https://simonplend.com/how-to-handle-request-validation-in-your-express-api/)
* [Elasticsearch Index API's](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices.html)
* [Nginx Location](https://www.plesk.com/blog/various/nginx-configuration-guide/)
