# Build stage
FROM node:23-alpine AS builder

WORKDIR /app
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build


# Production stage
FROM node:23-alpine AS runner

WORKDIR /app
# Copy entire app instead of just dist
COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./package*.json
EXPOSE 3001
CMD ["npm", "start"]