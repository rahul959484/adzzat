FROM node:22-alpine
WORKDIR /app
COPY starter ./starter
COPY grader ./grader
WORKDIR /app/grader
RUN npm install
CMD ["npm", "test"]
