# Use Node 16 (study-lenses compatibility requirement)
# Using slim Debian variant instead of Alpine to avoid canvas module build issues
FROM node:16-slim AS base

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

# Create non-root user for security (Debian commands)
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs studylenses

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

# Start the application
CMD ["npm", "run", "demo:deployed"]
