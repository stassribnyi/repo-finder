FROM node:12-alpine AS builder
WORKDIR /usr/src/app

# Add package.json before rest of repo for caching
ADD package.json /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /usr/src/app

RUN npm install
RUN npm install react-scripts@3.4.3 -g

# Define ARGs and ENVs
ARG NODE_ENV=production
ARG REACT_APP_GRAPH_URI
ARG REACT_APP_AUTH_TOKEN

ENV NODE_ENV=${NODE_ENV}
ENV REACT_APP_GRAPH_URI=${REACT_APP_GRAPH_URI}
ENV REACT_APP_AUTH_TOKEN=${REACT_APP_AUTH_TOKEN}

RUN npm run build

FROM nginx:1.17-alpine AS server

# Define ARGs and ENVs
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Remove dafault nginx host and setup our one
COPY docker/nginx/config/nginx.conf /etc/nginx/conf.d/default.conf

# Copy app to host it with nginx
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM server AS dev

FROM server AS prod