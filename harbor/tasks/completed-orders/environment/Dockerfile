FROM node:22-alpine

WORKDIR /app
COPY environment/package.json /app/package.json
COPY environment/orders.js /app/orders.js
RUN npm install
RUN mkdir -p /logs/verifier
