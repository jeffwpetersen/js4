FROM node:20.11.1

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies with legacy-peer-deps flag as specified in package.json
RUN npm run install-deps

# Copy the rest of the application
COPY . .

# Expose ports for Gatsby development server and GraphiQL
EXPOSE 8000 9000

# Set host to 0.0.0.0 to make the server accessible outside the container
ENV HOST=0.0.0.0

# Start the development server
CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]