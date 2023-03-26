// import Dependcies
import "dotenv/config";
import express from "express";
// import Conex && Models
import { connectDB } from "./config/db";
import "./resources";
// import Validation env
import env from "./utils/validateenv";
// import Router
import AuthRouter from "./resources/Users/user.router";
import SpecialiteRouter from "./resources/Specialites/specialite.router";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.intializedMiddleware();
    this.Router();
    this.DB();
    this.listenServer();
  }

  private intializedMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private Router() {
    this.app.use("/api/auth", AuthRouter);
    this.app.use("/api/user", SpecialiteRouter)
  }

  private DB() {
    connectDB;
  }

  private listenServer() {
    const port = env.PORT;
    this.app.listen(port, () =>
      console.log(`Server is Runnnig on Port ${port}`)
    );
  }
}

export default App;
