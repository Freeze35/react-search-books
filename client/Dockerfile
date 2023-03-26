FROM node:alpine

WORKDIR /client

ENV PATH="./node_modules/.bin:$PATH"

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

CMD ["npm","start"]