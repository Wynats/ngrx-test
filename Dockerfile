FROM alpine/git as clone
ARG url
RUN git clone ${url}
WORKDIR /app

#https://github.com/Ismaestro/angular7-example-app/blob/master/Dockerfile
FROM node:8-alpine as builder
COPY --from=clone /app/ngrx-test/package.json /app/ngrx-test/package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

#COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build
RUN $(npm bin)/ npm run build
FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY --from=clone /app/ngrx-test/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
