### Stage 1: Build Stage ###
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build


### Stage 2: Production Stage ###
FROM nginx:1-alpine-slim

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory in the Nginx container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built React files from the builder stage
COPY --from=builder /app/dist .

# Ensure permissions for the new user
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx \
    && chown -R appuser:appgroup /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html \
    && chmod -R 775 /var/cache/nginx /var/run /var/log/nginx

# Fix permission issue for nginx PID file
RUN touch /var/run/nginx.pid && \
    chown appuser:appgroup /var/run/nginx.pid

# Switch to non-root user
USER appuser

# Expose port 80
EXPOSE 80

# Start Nginx without overriding the PID
CMD ["nginx", "-g", "daemon off;"]