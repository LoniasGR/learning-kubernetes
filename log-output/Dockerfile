FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .yarn .yarn

COPY . /app

CMD [ "yarn", "start" ]

