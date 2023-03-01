import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db";
import env from "./utils/validateenv";
import './resources'

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.intializedMiddleware()
    this.DB()
    this.listenServer()
  }

  private intializedMiddleware() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))
  }

  private DB(){
    connectDB
  }

  private listenServer() {
    const port = env.PORT
    this.app.listen(port, () => console.log(`Server is Runnnig on Port ${port}`))
  }
}

export default App