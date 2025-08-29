# Multi-stage build for optimized production image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn install --production --silent

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM nginx:alpine AS production

# Install additional tools for health checks
RUN apk add --no-cache curl

# Copy custom nginx configuration
COPY ./deployment/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Create nginx cache directories
RUN mkdir -p /var/cache/nginx/client_temp \
    /var/cache/nginx/proxy_temp \
    /var/cache/nginx/fastcgi_temp \
    /var/cache/nginx/uwsgi_temp \
    /var/cache/nginx/scgi_temp

# Set proper permissions
RUN chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Expose port
EXPOSE 80

# Add labels for better organization
LABEL maintainer="SVASAMM Team" \
      description="SVASAMM Business Automation Website" \
      version="1.0.0" \
      org.opencontainers.image.source="https://github.com/svasamm/website"

# Start nginx
CMD ["nginx", "-g", "daemon off;"]