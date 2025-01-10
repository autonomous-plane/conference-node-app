# Demo Node.js App for Various Conference Talks (Cloud Native Rejekts, SecurityCon, etc)

## Build

`docker build -t autonomousplane/conference-node-app:latest .`

## Run

`docker run -it --rm -p 1300:1300 --name app --init autonomousplane/conference-node-app:latest`
