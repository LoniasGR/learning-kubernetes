FROM node:18-alpine

ARG PORT=3000

WORKDIR /app

COPY ["package.json", "yarn.lock", ".yarn", "/app/"]

RUN yarn

COPY . /app

EXPOSE ${PORT}

CMD [ "yarn", "start" ]

