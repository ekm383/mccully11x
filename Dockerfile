# Use Debian-based Node.js 18 (NOT Alpine)
FROM node:12-bullseye

# Set the working directory inside the container
WORKDIR /app

# Copy package.json & package-lock.json separately to leverage Docker caching
COPY package*.json ./

# Remove existing node_modules (if present)
RUN rm -rf node_modules

# Install dependencies (forcing sharp to rebuild)
RUN npm install --build-from-source

# Copy all project files into the container
COPY . .

# Expose Gatsby's default development port
EXPOSE 8000

# Ensure Gatsby CLI is installed globally (optional)
RUN npm install -g gatsby-cli

# Start Gatsby in development mode
CMD ["npm", "run", "develop"]

