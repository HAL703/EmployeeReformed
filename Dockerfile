# syntax=docker/dockerfile:1

# node version
ARG NODE_VERSION=20.5.1

# tells Docker what image to use, this uses the current node version!
FROM node:${NODE_VERSION}-alpine as base

# specifies environment that the application runs in
ENV NODE_ENV=production

# working directory, Docker uses this path as the default location for all subsequent commands
WORKDIR /app

# COPY Syntax: COPY ["<src>", "<dest>"]
# src: file(s) to copy | dest: where to put the file(s)
# can specify multiple src resources delimited by a comma

# This next command moves package.json and package-lock.json into the central directory in the image
COPY ["package.json", "package-lock.json*", "./"]

# the above only moves the listed files into the directory, so we only need to run npm install next

# will install node modules into the node_modules directory inside the image
RUN npm install --production

# ALL dependencies should be taken care of at this point !!!!!
# -##########################################################-

# copies source code into the image, takes all files in the current directory and copies them into the image
COPY . .

# starts the project with the listed command
# CMD ["node", "./src/index.js"]

CMD ["npm", "start"]
