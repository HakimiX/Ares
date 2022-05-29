# Jenkins CI/CD on Kubernetes using Minikube

* [Overview](#overview)
* [Setup](#setup)

### Overview

### Setup

1. Create a Minikube profile
```shell
minikube start -p ares-jenkins
```
2. Set as default profile
```shell
minikube profile ares-jenkins
```
3. Create a namespace 
```shell
kubectl create namespace ares
kubens ares
```
4. Deploy Kubernetes manifests
```shell
kubectl apply -f ./kubernetes
```
5. Navigate to Jenkins using the Minikube IP and Service port
```shell
minikube profile list

|------------------|-----------|---------|--------------|------|---------|---------|-------|
|     Profile      | VM Driver | Runtime |      IP      | Port | Version | Status  | Nodes |
|------------------|-----------|---------|--------------|------|---------|---------|-------|
| minikube         | hyperkit  | docker  | 143.138.75.1 | 8443 | v1.23.3 | Stopped |     1 |
| ares-jenkins     | hyperkit  | docker  | 111.622.54.2 | 8443 | v1.23.3 | Running |     1 |
|------------------|-----------|---------|--------------|------|---------|---------|-------|

# Get the service port
kubectl get service 

NAME      TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)                                       AGE
jenkins   NodePort   10.110.96.160   <none>        8080:31598/TCP,50000:31919/TCP,80:31840/TCP   3m11s

# Navigate to 
http://111.622.54.2:31598
```
