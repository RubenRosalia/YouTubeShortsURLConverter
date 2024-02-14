# Use the official PHP Apache image
FROM php:8.2.8-apache

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js and npm from the default Debian repositories
RUN apt-get update \
    && apt-get install -y --no-install-recommends nodejs npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Gulp globally
RUN npm install -g gulp-cli

# Set the working directory
WORKDIR /var/www/html

# Copy the contents of the current directory to the web server's document root
COPY ./ /var/www/html

# Gives permission
RUN chown -R www-data:www-data /var/www/html

# Install project dependencies
RUN npm install

# Start the Apache server
CMD ["apache2-foreground"]
