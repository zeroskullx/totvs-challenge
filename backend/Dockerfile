FROM node:12.18-alpine
WORKDIR /node-server
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn && yarn cache clean
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
