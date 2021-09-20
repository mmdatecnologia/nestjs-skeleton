FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND yarn.lock are copied
# where available
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

RUN yarn global add @nestjs/cli

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "yarn", "start:prd" ]
