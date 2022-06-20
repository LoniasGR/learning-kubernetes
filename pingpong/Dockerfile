FROM node:18-alpine as builder

WORKDIR /app

COPY ["package.json", "yarn.lock", ".yarn", "/app/"]

RUN yarn

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app
RUN mkdir /app/data
COPY . /app

CMD [ "yarn", "start" ]

