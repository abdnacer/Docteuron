import express, { Request, Response } from "express";
import errorMiddleware from "../../../middleware/errorHandler/error.middlewre";
import AuthController from "./auth.controller";

class RouterAuth {
  public router: express.Router;

  constructor() {
    this.router = express();
    this.User();
    this.errorMiddleware();
  }

  private User() {
    this.router.post("/register/patient", AuthController.RegisterPatient);
    this.router.post("/register/doctor", AuthController.RegisterDoctor);
    this.router.get("/verify-email/:token", AuthController.VerifyEmail);
    this.router.post("/login", AuthController.Login);
    this.router.post("/reset-password", AuthController.ResetPassword);
    this.router.post("/forgot-Password", AuthController.ForgotPassword);
    this.router.get("/verify-forgot-password/:token",AuthController.VerifyForgotPassword);
    this.router.post("/form-forgot-password",AuthController.FormForgotPassword);
    this.router.get("/logout", AuthController.Logout);
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware);
  }
}

const AuthRouter = new RouterAuth().router;

export default AuthRouter