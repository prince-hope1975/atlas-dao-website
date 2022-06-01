# # Docker Image which is used as foundation to create
# # a custom Docker Image with this Dockerfile
# FROM node:17

# # A directory within the virtualized Docker environment
# # Becomes more relevant when using Docker Compose later
# WORKDIR /usr/src/app

# # Copies package.json and package-lock.json to Docker environment
# COPY package*.json ./

# # Installs all node packages
# RUN yarn

# # Copies everything over to Docker environment
# COPY . .

# # Uses port which is used by the actual application
# EXPOSE 3000

# ENV PORT 3000

# # Finally runs the application
# CMD [ "yarn", "serve" ]

#build stage for a Node.js application
FROM node:17 as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

#production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]