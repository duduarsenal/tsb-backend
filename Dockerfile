# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /src

# Copy the application files into the working directory
COPY . /src

# Install the application dependencies
RUN npm install

# Expose port 3000
EXPOSE 3030

# Comando para iniciar o aplicativo
CMD [ "node", "server.js" ]
