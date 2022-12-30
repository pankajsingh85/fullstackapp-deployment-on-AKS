### STAGE 1: Build ###
FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 
# CMD ["npm", "start"]

### STAGE 2: Run ###
FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/product-catalog /usr/share/nginx/html

