# Docteuron

## Docker Compose

### 1- Crée `DockerFile` de partie backend :

```
    FROM node:16
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . .
    EXPOSE 4000
    CMD ["node", "index.js"]
 ```
    
 ### 2- Crée `dockerfile` de partie frontend :
 
 ```
    FROM node:16
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["npm", "start"]
 ```
 
 ### 3- Pour crée une image de Front :
 
 ```
 docker build -t front .
```

### 4- Pour crée une image de Backend :

```
docker bluid -t api .
```

### 5- Crée un fichier : `docker-compose-yaml` pour builder les images

```
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"

  api:
    build: ./backend
    container_name: api
    ports:
      - '8080:8080'
    volumes:
      - ./Backend:/app
      - /app/node_modules
    
  front:
    build: ./frontend
    container_name: front
    ports:
        - '3000:3000'
    volumes:
      - ./frontend/src:/app/src

 ```

6- Run le programme par la commande :

```
 docker-compose up -d
 ```
 
 7- Pour effacer les images en utilise la commande :
 
 ```
 docker system prune -a
```

## Test Unitaire

### 1- Installe jest :

```
npm i jest
```

### 2- Installe Supertest :

```
npm i supertest
```

### 3- Créer le Test de function login :

* Example :

```
const request = require('supertest');
const app = require('./server');

describe("POST /api/auth/login", () => {
  let body = {
      email: "",
      password: ""
  }
  
  describe("Please Fill All The Fields", () => {
      test("Please Fill All The Fields", async () => {
          body = {
              email: "",
              password: ""
          }
          const response = await request(app).post("/api/auth/login").send(body)
          expect(response.text).toBe('Please Fill All The Fields')
      })
  })
  
  describe("Email is incorrect", () => {
      test("Email is incorrect", async () => {
          body = {
              email: "client@gmail.com",
              password: "sqjdlqjmdkùlkjl"
          }
          const response = await request(app).post("/api/auth/login").send(body)
          expect(response.text).toBe('Email is incorrect')
      })
  })
  
   describe("Check Your Email To Active Your Account", () => {
      test("Check Your Email To Active Your Account", async () => {
          body = {
              email: "Check_Your_Email_To_Active_Your_Account@gmail.com",
              password: "sqjdlqjmdkùlkjl"
          }
          const response = await request(app).post("/api/auth/login").send(body)
          expect(response.text).toBe('Check Your Email To Active Your Account')
      })
  })
  
  describe("Your Account is Banned", () => {
      test("Your Account is Banned", async () => {
          body = {
              email: "Your_Account_is_Banned@gmail.com",
              password: "sqjdlqjmdkùlkjl"
          }
          const response = await request(app).post("/api/auth/login").send(body)
          expect(response.text).toBe('Your Account is Banned')
      })
  })
  
   describe("User Not Correct", () => {
      test("User Not Correct", async () => {
          body = {
              email: "Your_Account_is_Banned@gmail.com",
              password: "sqjdlqjmdkùlkjl"
          }
          const response = await request(app).post("/api/auth/login").send(body)
          expect(response.text).toBe('User Not Correct')
      })
  })
  ```

