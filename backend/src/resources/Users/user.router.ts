import express, { Request, Response } from "express";
import errorMiddleware from "../../middleware/errorHandler/error.middlewre";
import UserController from "./user.controller";

class RouterUser {
  public router: express.Router;

  constructor() {
    this.router = express();
    this.User();
    this.errorMiddleware();
  }

  private User() {
    this.router.post("/register/patient", UserController.RegisterPatient);
    this.router.post("/register/doctor", UserController.RegisterDoctor);
    this.router.get("/verify-email/:token", UserController.VerifyEmail);
    this.router.post("/login", UserController.Login);
    this.router.post("reset-password", UserController.ResetPassword);
    this.router.post("/forgot-Password", UserController.ForgotPassword);
    this.router.get("/verify-forgot-password/:token",UserController.VerifyForgotPassword);
    this.router.post("/form-forgot-password",UserController.FormForgotPassword);
    this.router.get("/logout", UserController.Logout);
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware);
  }
}

const UserRouter = new RouterUser().router;

export default UserRouter