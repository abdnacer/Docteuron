// import Dependcies
import "dotenv/config";
import express from "express";
import cors from "cors";
// import Conex && Models
import { connectDB } from "./config/db";
import "./resources";
// import Validation env
import env from "./utils/validateenv";
// import Router
import AuthRouter from "./resources/Users/Auth/auth.router";
import SpecialiteRouter from "./resources/Specialites/specialite.router";
import RendezVousRouter from "./resources/RendezVous/rendezVous.router";
import UserRouter from "./resources/Users/User/user.router";

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
    this.app.use(cors());
  }

  private Router() {
    this.app.use("/api/auth", AuthRouter);
    this.app.use("/api/user", SpecialiteRouter);
    this.app.use("/api/user", RendezVousRouter);
    this.app.use("/api/user", UserRouter);
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
