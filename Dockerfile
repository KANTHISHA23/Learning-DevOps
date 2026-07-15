FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html styles.css script.js ./

EXPOSE 3000

CMD ["npm", "start"]
