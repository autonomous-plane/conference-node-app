FROM node:18.1.0

WORKDIR /opt/demo/service

COPY service/package*.json ./
RUN npm ci

COPY service /opt/demo/service

EXPOSE 1300
ENTRYPOINT ["node", "/opt/demo/service/server.js"]

# TO BUILD:
# docker build -t autonomousplane/conference-node-app:latest .
# TO RUN:
# docker run -it --rm -p 1300:1300 --name app --init autonomousplane/conference-node-app:latest