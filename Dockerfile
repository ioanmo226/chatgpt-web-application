# Set the base image
FROM node:16

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the node server
CMD ["node", "index.js"]
