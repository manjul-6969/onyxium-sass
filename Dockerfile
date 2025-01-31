FROM ghcr.io/puppeteer/puppeteer:latest

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

USER root

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

RUN npm run build

CMD ["npm", "start"]