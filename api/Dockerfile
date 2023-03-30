FROM node:19

EXPOSE 4000

#ENV DEBIAN_FRONTEND=noninteractive

#RUN mkdir /app && chown node:node /app
RUN npm i -g nodemon

RUN mkdir -p /home/app

WORKDIR /home/app

RUN npm install i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

#ENV PATH=/app/node_modules/.bin:$PATH

#WORKDIR /app/node_app


CMD ["nodemon", "index.js"]