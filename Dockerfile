# Use Playwright base image
FROM mcr.microsoft.com/playwright:v1.39.0-focal

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Default command
CMD ["npx", "playwright", "test"]
