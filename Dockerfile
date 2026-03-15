# Use the official Node.js image as the base image
FROM node:22-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application files to the working directory
COPY . .

# Expose the desired port for the development server (default is 5173 for Vite)
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]
