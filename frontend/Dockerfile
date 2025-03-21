#Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the frontend
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start the frontend
CMD ["npm", "start"]

