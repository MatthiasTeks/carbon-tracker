FROM node:20.9.0-alpine3.17

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm i

RUN apk --update --no-cache add curl
COPY ./src ./src

COPY ./tsconfig.json ./tsconfig.json

CMD npm start