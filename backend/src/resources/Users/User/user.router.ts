import express, { Request, Response } from "express";
import errorMiddleware from "../../../middleware/errorHandler/error.middlewre";
import UserController from "./user.controller";

class RouterUser {
  public router: express.Router;

  constructor() {
    this.router = express();
    this.User();
    this.errorMiddleware();
  }

  private User() {
    this.router.get("/doctor", UserController.AfficherDoctor)
    this.router.get("/patient", UserController.AfficherPatient)
    this.router.put("/banner/:id", UserController.BannerUser)
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware);
  }
}

const UserRouter = new RouterUser().router;

export default UserRouter