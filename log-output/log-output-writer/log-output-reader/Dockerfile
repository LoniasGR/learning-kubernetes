FROM node:18-alpine as builder

ARG PORT=3000

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .yarn .yarn

RUN yarn

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app
RUN mkdir /app/data
COPY . /app

EXPOSE ${PORT}

CMD [ "yarn", "start" ]

