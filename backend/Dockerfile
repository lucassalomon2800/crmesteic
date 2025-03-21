# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose the port your backend will run on
EXPOSE 5000

# Use PM2 to run the app
CMD ["npx", "pm2-runtime", "start", "app.js"]

