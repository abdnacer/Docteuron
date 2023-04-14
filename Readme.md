
##### ____ Docker Compose ____

# 1- Crée "dockerfile" de partie backend :

# FROM node:16
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . .
    EXPOSE 4000
    CMD ["node", "index.js"]