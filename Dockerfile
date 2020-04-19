# Start the mongodb container
# docker run -d --name mongoContainer mongo

# Build the current server image
# docker build -t node-docker .

# Start the node container and link to the mongodb container
# docker run -p 80:3000 -d --link mongoContainer:mongodb node-docker

# Create a custom bridge network
# docker network create --driver bridge isolated_network

FROM node:latest

ENV PORT=3000
ENV MONGO_URL="mongodb://172.17.0.2:27017/node_docker_db"

WORKDIR /usr/node-docker

COPY . .

RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
