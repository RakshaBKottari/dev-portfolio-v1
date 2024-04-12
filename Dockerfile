# Use an existing docker image as a base and name it as 'builder'
FROM node:17-alpine AS builder

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file from the local machine to the container's /app directory
COPY ./package.json /app/package.json

# Install Node.js dependencies (npm install)
RUN npm install

# Copy the rest of the application source code from the local machine to the container's /app directory
COPY . /app

# Build the application (npm run build)
RUN npm run build

# Start a new stage from nginx:alpine
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
# RUN rm -rf *

# Copy static assets from builder stage
COPY --from=builder /app/dist .

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Entry point when Docker container has started
ENTRYPOINT ["nginx", "-g", "daemon off;"]
