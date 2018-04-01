FROM node:8

COPY app /app
COPY package.json /

RUN npm install

ENV PORT 80
EXPOSE 80
CMD npm run start