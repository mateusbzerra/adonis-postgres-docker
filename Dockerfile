FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

# Install
RUN npm install

COPY . .
# MIGRATE
#RUN node --harmony ./ace migration:run --force


EXPOSE ${PORT}

CMD [ "npm","start" ]
