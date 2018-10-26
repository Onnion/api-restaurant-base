FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN apt install node-typescript
RUN npm i -g pm2
RUN npm install --silent --progress=false

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]