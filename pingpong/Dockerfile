FROM node:18-alpine as builder

WORKDIR /app

COPY ["package.json", "package-lock.json", "/app/"]

RUN npm i

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app
RUN mkdir /app/data
COPY . /app

CMD [ "yarn", "start" ]

