FROM node:18-alpine

# set NODE_ENV to "development" or "production" (minimum log level and more cache levels)
ENV NODE_ENV=development

# Use this path as the default location for all subsequent commands
WORKDIR /app

# Copy package.json and package-lock.json files into our image before run "npm install".
#COPY package*.json .
COPY . .

# Download/install dependencies in "node_modules" folder.
RUN npm install
#RUN npm install && npm cache clean --force

#Copy source code to image
#COPY . .

# Define webserver port
EXPOSE 3000

# Start webserver
CMD ["npm", "run", "start"]