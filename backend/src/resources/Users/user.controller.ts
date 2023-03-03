// Dependcies
import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";
import matches from "validator/lib/matches";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";
import bcrypt from "bcryptjs";
// ErrorHandler
import HttpException from "../../middleware/errorHandler/HttpException";
import Mailer from "../../utils/mailer";
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
      if (!isEmail(email)) {
        return next(new HttpException(400, "Invalid input Email"));
      } else if (!isDate(dateBirthday)) {
        return next(new HttpException(400, "Invalid input Date Birthday"));
      } else if (!matches(cin, /^[A-Z]{2}\d{5,7}$/)) {
        return next(new HttpException(400, "Invalid input CIN"));
      } else if (!isMobilePhone(phone)) {
        return next(new HttpException(400, "Invalid input Phone"));
      } else if (!isStrongPassword(password)) {
        return next(new HttpException(400, "Invalid input Password"));
      } else if (!isStrongPassword(confirm_password)) {
        return next(new HttpException(400, "Invalid input Confirm Password"));
      } else {
        const userExists = await db.User.findOne({ email });
        const phoneExists = await db.User.findOne({ phone });
        if (userExists) return next(new HttpException(400, "User Already Exists"));
        else {
          if (phoneExists)
            return next(new HttpException(400, "Phone Already Exists"));
          else {
            if (password !== confirm_password)
              return next(new HttpException(400, "Password Not Matched"));
            else {
              const salt = await bcrypt.genSalt(10);
              const passHashed = await bcrypt.hash(password, salt);

              const role = await db.Role.aggregate([
                { $match: { name: "patient" } },
              ]);

              if (role) {
                const user = await db.User.create({
                  nameComplete: nameComplete,
                  phone: phone,
                  dateBirthday: dateBirthday,
                  city: city,
                  cin: cin,
                  address: address,
                  email: email,
                  password: passHashed,
                  role: role[0]._id,
                  isBanned: false,
                });

                if (user) {
                  Mailer.SendMail('verify-email', email)
                  res.json('Check Your Email')
                }
                else return next(new HttpException(400, "User Not Registed"));
              } else
                return next(
                  new HttpException(400, "Not Role Patient in Database ")
                );
            }
          }
        }
      }
    }
  };

  public RegisterDoctor = async (
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
      INPE,
      residence,
      cabinetName,
      specialty,
      description,
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
      confirm_password == "" ||
      INPE == "" ||
      residence == "" ||
      cabinetName == "" ||
      specialty == "" ||
      description == ""
    )
      return next(new HttpException(400, "Please Fill All The Fields"));
    else {
      if (!isEmail(email)) {
        return next(new HttpException(400, "Invalid input Email"));
      } else if (!isDate(dateBirthday)) {
        return next(new HttpException(400, "Invalid input Date Birthday"));
      } else if (!matches(cin, /^[A-Z]{2}\d{5,7}$/)) {
        return next(new HttpException(400, "Invalid input CIN"));
      } else if (!isMobilePhone(phone)) {
        return next(new HttpException(400, "Invalid input Phone"));
      } else if (!isStrongPassword(password)) {
        return next(new HttpException(400, "Invalid input Password"));
      } else if (!isStrongPassword(confirm_password)) {
        return next(new HttpException(400, "Invalid input Confirm Password"));
      } else if (!matches(INPE, /^16\d{7}$/)) {
        return next(new HttpException(400, "Invalid input INPE"));
      } else {
        const userExists = await db.User.findOne({ email });
        const phoneExists = await db.User.findOne({ phone });
        if (userExists)
          return next(new HttpException(400, "User Already Exsits"));
        else if (phoneExists)
          return next(new HttpException(400, "Phone Already Exists"));
        else if (password !== confirm_password)
          return next(new HttpException(400, "Password Not Matched"));
        else {
          const salt = await bcrypt.genSalt(10);
          const passHashed = await bcrypt.hash(password, salt);

          const role = await db.Role.aggregate([
            { $match: { name: "doctor" } },
          ]);

          if (role) {
            const user = await db.User.create({
              nameComplete: nameComplete,
              phone: phone,
              dateBirthday: dateBirthday,
              city: city,
              cin: cin,
              address: address,
              email: email,
              password: passHashed,
              INPE: INPE,
              residence: residence,
              cabinetName: cabinetName,
              specialty: specialty,
              description: description,
            });

            if (user) res.json("Welcome " + nameComplete);
            else return next(new HttpException(400, "User Not Registed"));
          } else
            return next(
              new HttpException(400, "Not Role Patient in Database ")
            );
        }
      }
    }
  };

  public VerifyEmail = (req: Request, res: Response, next: NextFunction) => {
    // const verifyToken
    res.send('Verify-Email')
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
