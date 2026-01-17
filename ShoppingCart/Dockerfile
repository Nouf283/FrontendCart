# Stage 1: Build Angular app
FROM node:20 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all Angular files from current folder
COPY ./ ./

# Install Angular CLI and build
RUN npm install -g @angular/cli
RUN ng build --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built Angular app
COPY --from=build /app/dist/ShoppingCart /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
