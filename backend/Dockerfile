FROM node:18-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock", ".yarn", "/app/"]

RUN yarn

COPY . /app

CMD [ "yarn", "start" ]

