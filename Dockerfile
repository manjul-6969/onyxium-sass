FROM ghcr.io/puppeteer/puppeteer:latest

# Set environment variables
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set working directory
WORKDIR /usr/src/app

# Change ownership of the working directory
RUN chown -R node:node /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies with npm ci
RUN npm ci --unsafe-perm=true

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Set the command to start the application
CMD ["npm", "start"]
