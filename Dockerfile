# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose port (if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
