# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

ARG TELEGRAM_BOT_TOKEN
ARG TELEGRAM_CHAT_ID
ARG OPENAI_API_KEY
ENV TELEGRAM_BOT_TOKEN=7861710550:AAHXT_0u3hsfZQ8G2_uGnn30x9kN1oa-qKM
ENV TELEGRAM_CHAT_ID=7988930377
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production
# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"] 