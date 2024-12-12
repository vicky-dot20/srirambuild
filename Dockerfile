# Stage 1: Build the app
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies (both development and production)
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the app with Node.js
FROM node:18 AS production

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
