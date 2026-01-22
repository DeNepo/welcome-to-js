# Use Node 18 (study-lenses compatibility requirement)
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies (production only)
RUN npm ci --only=production

# Production image
FROM base AS runner
WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 studylenses

# Copy node_modules from deps stage
COPY --from=deps --chown=studylenses:nodejs /app/node_modules ./node_modules

# Copy application code
COPY --chown=studylenses:nodejs . .

# Switch to non-root user
USER studylenses

# Expose port
EXPOSE 4005

# Set environment
ENV NODE_ENV=production
ENV PORT=4005

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4005/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["npm", "run", "demo:deployed"]