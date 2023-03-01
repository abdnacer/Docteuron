// Dependcies
import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate"
import matches from "validator/lib/matches"
import isMobilePhone from "validator/lib/isMobilePhone"
import isStrongPassword from "validator/lib/isStrongPassword"
// ErrorHandler
import HttpException from "../../middleware/errorHandler/HttpException";
// Models
import db from "../../resources";


class ControllerUser {
  public RegisterPatient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {
      nameComplete,
      phone,
      dateBirthday,
      city,
      cin,
      address,
      email,
      password,
      confirm_password,
    } = req.body;

    if (
      nameComplete == "" ||
      phone == "" ||
      dateBirthday == "" ||
      city == "" ||
      cin == "" ||
      address == "" ||
      email == "" ||
      password == "" ||
      confirm_password == ""
    )
      return next(new HttpException(400, "Please Fill All The Fields"));
    else {
      if (
        !isEmail(email) ||
        !isDate(dateBirthday) ||
        !matches(cin, /^[A-Z]{2}\d{5,7}$/) ||
        !isMobilePhone(phone) ||
        !isStrongPassword(password) ||
        !isStrongPassword(confirm_password)
      ) {
        return next(new HttpException(400, "Invalid"));
      } else {
        const useExists = await db.User.findOne({ email });
        const phoneExists = await db.User.findOne({ phone });

        if (useExists) return new HttpException(400, "User Already Exists");
        else {
          if (phoneExists)
            return new HttpException(400, "Phone Already Exists");
          else {
            res.send("h");
          }
        }
      }
    }
  };

  public RegisterDoctor = (req: Request, res: Response, next: NextFunction) => {
    // const {nameComplete, phone, dateBirthday, city, }
  };

  public VerifyEmail = (req: Request, res: Response, next: NextFunction) => {
    res.send("Verify-Email");
  };

  public Login = (req: Request, res: Response, next: NextFunction) => {
    res.send("Login");
  };

  public ResetPassword = (req: Request, res: Response, next: NextFunction) => {
    res.send("Reset-Password");
  };

  public ForgotPassword = (req: Request, res: Response, next: NextFunction) => {
    res.send("Forgot Password");
  };

  public VerifyForgotPassword = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.send("Verify Forgot Password");
  };

  public FormForgotPassword = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.send("Form Forgot Password");
  };

  public Logout = (req: Request, res: Response, next: NextFunction) => {
    res.send("Logout");
  };
}

const UserController = new ControllerUser();

export default UserController;
