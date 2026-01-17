# Stage 1: Build Angular app
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY ./ ./
RUN npm install -g @angular/cli
RUN ng build --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/ShoppingCart /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
