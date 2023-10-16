FROM node:18-alpine
WORKDIR /app/gateway
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3500
CMD ["npm", "dev"]