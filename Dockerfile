# ============================
# Stage 1 - Build Storybook
# ============================

# Use Node.js image to build the application
FROM node:20-alpine AS build

# Create and set the working directory required by the assignment
WORKDIR /lerat_jordan_ui_garden

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Generate a production Storybook build
RUN npm run build-storybook

# ============================
# Stage 2 - Serve Production Build
# ============================

# Use a lightweight nginx image to host the static files
FROM nginx:alpine

# Create and set the working directory required by the assignment
WORKDIR /lerat_jordan_ui_garden

# Copy the production Storybook files from the build stage
# into nginx's default web server directory
COPY --from=build /lerat_jordan_ui_garden/storybook-static /usr/share/nginx/html

# Document that the container serves web traffic
# (nginx internally serves on port 80)
EXPOSE 8083
# Start nginx and keep the container running
CMD ["nginx", "-g", "daemon off;"]