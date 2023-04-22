FROM node:16.16.0

WORKDIR /TALLERGITHUBACTIONS

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "echo", "Docker build" ]