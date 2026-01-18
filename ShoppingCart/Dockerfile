# Stage 1: Build Angular app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build Angular app
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy built Angular files from build stage
COPY --from=build /app/dist/ShoppingCart/browser /usr/share/nginx/html

# Use custom NGINX config (if needed)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

