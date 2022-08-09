# fruit-app-nodejs
## Description

This is a Red Hat OpenShift Data Access demo that is built with Node JS to demonstrate the Service Binding feature that is available in OpenShift. The application is built with a set endpoints over REST. It's aalso a great way to find out how to avoid Scurvy.

### What technology do we use?
- Node JS to buid the REST endpoints
- Connection pool to connect to PostgreSQL
- docker to start up a PostgreSQL database system

### Prerequisites
- Docker
- Node JS
- OpenShift (not available yet)

### Commands to run currently:

1. install all necessary node components
- `npm i`
2. start a PostgreSQL database system using docker images
- `docker-compose -f docker-compose up`
3. login to your PostgreSQL database system
- `docker exec -t pg_container bash`
4. insert fruits into you PostgreSQL database 
- `INSERT INTO fruit(id, name) VALUES ('1', 'Cherry');`
- `INSERT INTO fruit(id, name) VALUES ('2', 'Apple');`
- `INSERT INTO fruit(id, name) VALUES ('3', 'Banana');`
5. start up your server (should launch website)
- `node server.js`

### next steps:
1. connect index.html with queries.js
2. add OpenShift connectivity
3. add Cyber Ark connectivity to keep secrets encrypted
