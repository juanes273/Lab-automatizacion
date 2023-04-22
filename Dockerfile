FROM node:16.16.0

WORKDIR /tallergithubactions

COPY package*.json ./

RUN npm install

COPY . .