# Multi-stage build for optimized production image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install ALL deps (Next's build toolchain is in devDependencies, so --production
# would break `yarn build`). The final image is a separate nginx stage, so build
# deps never ship.
RUN yarn install --frozen-lockfile --silent

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
COPY --from=builder /app/out /usr/share/nginx/html

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

# Add health check (IPv4 explicitly; `localhost` may resolve to ::1 while nginx only
# listens on IPv4, which would mark the container unhealthy and make Traefik drop it).
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://127.0.0.1/health || exit 1

# Expose port
EXPOSE 80

# Add labels for better organization
LABEL maintainer="SVASAMM Team" \
      description="SVASAMM Business Automation Website" \
      version="0.1.0" \
      org.opencontainers.image.source="https://github.com/svasamm/website"

# Start nginx
CMD ["nginx", "-g", "daemon off;"]