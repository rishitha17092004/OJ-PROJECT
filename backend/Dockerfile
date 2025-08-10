# Use small Node.js image
FROM --platform=linux/amd64 node:24-alpine

# Set working directory inside container
WORKDIR /app

# Install OS packages you need
RUN apk update && apk add --no-cache \
    g++ make \
    openjdk17 \
    python3 py3-pip

# Copy package.json first (for better caching)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy all backend files into the container
COPY . .

# Expose the backend port
EXPOSE 5000

# Run your backend
CMD ["node", "server.js"]
