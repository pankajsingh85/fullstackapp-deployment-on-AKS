FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install
RUN apk --no-cache add curl
COPY . .
EXPOSE 5000
CMD ["npm", "start"]