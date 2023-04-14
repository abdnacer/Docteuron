import express, { Request, Response } from "express";
import errorMiddleware from "../../../middleware/errorHandler/error.middlewre";
import UserController from "./user.controller";
// import Permission Middleware
import UserPermission from "../../../middleware/Permission/userPermission";

class RouterUser {
  public router: express.Router;

  constructor() {
    this.router = express();
    this.User();
    this.errorMiddleware();
  }

  private User() {
    this.router.get(
      "/doctor",
      UserPermission.User,
      UserController.AfficherDoctor
    );
    this.router.get(
      "/patient",
      UserPermission.User,
      UserController.AfficherPatient
    );
    this.router.put(
      "/banner/:id",
      UserPermission.User,
      UserController.BannerUser
    );
    this.router.get(
      "/statistique",
      UserPermission.User,
      UserController.StatistiqueAdmin
    );
    this.router.get(
      "/setting",
      UserPermission.User,
      UserController.SettingUser
    );
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware);
  }
}

const UserRouter = new RouterUser().router;

export default UserRouter;
