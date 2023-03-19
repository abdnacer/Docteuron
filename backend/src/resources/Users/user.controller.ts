// Dependcies
import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";
import matches from "validator/lib/matches";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Storage from "local-storage";
// ErrorHandler
import HttpException from "../../middleware/errorHandler/HttpException";
import Mailer from "../../utils/mailer";
import env from "../../utils/validateenv";
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
      confirmPassword,
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
      confirmPassword == ""
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
        return next(new HttpException(400, "Password input Not Strong"));
      } else if (!isStrongPassword(confirmPassword)) {
        return next(new HttpException(400, "Password input Not Strong"));
      } else {
        const userExists = await db.User.findOne({ email });
        const phoneExists = await db.User.findOne({ phone });
        if (userExists)
          return next(new HttpException(400, "User Already Exists"));
        else {
          if (phoneExists)
            return next(new HttpException(400, "Phone Already Exists"));
          else {
            if (password !== confirmPassword)
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
                  verification: false,
                });

                if (user) {
                  Mailer.SendMail("verify-email", email);
                  res.json("Welcome" + nameComplete + "Check Your Email");
                } else return next(new HttpException(400, "User Not Registed"));
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
      confirmPassword,
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
      confirmPassword == "" ||
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
        return next(new HttpException(400, "Password input Not Strong"));
      } else if (!isStrongPassword(confirmPassword)) {
        return next(new HttpException(400, "Password input Not Strong"));
      } else if (!matches(INPE, /^16\d{7}$/)) {
        return next(new HttpException(400, "Invalid input INPE"));
      } else {
        const userExists = await db.User.findOne({ email });
        const phoneExists = await db.User.findOne({ phone });
        if (userExists)
          return next(new HttpException(400, "User Already Exsits"));
        else if (phoneExists)
          return next(new HttpException(400, "Phone Already Exists"));
        else if (password !== confirmPassword)
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
              role: role[0]._id,
              verification: false,
              isBanned: false,
            });

            if (user) {
              Mailer.SendMail("verify-email", email);
              res.json("Welcome " + nameComplete + " Check Your Email");
            } else return next(new HttpException(400, "User Not Registed"));
          } else
            return next(
              new HttpException(400, "Not Role Patient in Database ")
            );
        }
      }
    }
  };

  public VerifyEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token: any = req.params.token;
    const verifyToken: any = await jwt.verify(token, env.Node_ENV);

    const verifyUser = await db.User.findOne({ email: verifyToken.email });
    if (verifyUser && verifyUser.verification === true)
      return res.json("This Compt Deja Verified");

    const verificationEmail = await db.User.updateOne(
      { email: verifyToken.email },
      { $set: { verification: true } }
    );
    if (verificationEmail) res.json("Compts Verified");
    if (verifyUser && verifyUser.verification === true)
      throw Error("You Are Registed");
    if (!verificationEmail) throw Error("You can't to active your account");
  };

  public Login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (email == "" || password == "")
      return next(new HttpException(400, "Please Fill All The Fields"));

    const user = await db.User.findOne({ email });
    if (!user) return next(new HttpException(400, "Email is incorrect"));
    if (!user.verification)
      return next(
        new HttpException(400, "Check Your Email To Active Your Account")
      );
    if (user.isBanned)
      return next(new HttpException(400, "Your Account is Banned"));

    const correctPassword = await bcrypt.compare(password, user.password);
    if (user && correctPassword) {
      const role = await db.Role.findById({ _id: user.role });
      const token = this.generateToken(user.id);

      if (user && correctPassword && role && token) {
        Storage("token", token);
        res.json(user);
      } else {
        return next(new HttpException(400, "User Not Correct"));
      }
    }else{
      return next(new HttpException(400, "User Not Correct"));
    }
  };

  public ResetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { lastPassword, nouveauPassword, confirmPassword } = req.body;

    if (lastPassword === "" || nouveauPassword === "" || confirmPassword === "")
      next(new HttpException(400, "Please Fill All The Fields"));
    if (nouveauPassword !== confirmPassword)
      next(new HttpException(400, "Password Not Matched"));
    if (
      !isStrongPassword(lastPassword) ||
      !isStrongPassword(nouveauPassword) ||
      !isStrongPassword(confirmPassword)
    )
      next(new HttpException(400, "Password input Not Strong"));

    const token: any = Storage("token");
    const verifyToken: any = await jwt.verify(token, env.Node_ENV);
    if (!verifyToken) next(new HttpException(400, "Token Not Verified"));
    const findIdUser = await db.User.findById(verifyToken.id);

    if (findIdUser) {
      const comparePassword = await bcrypt.compare(
        lastPassword,
        findIdUser.password
      );
      if (!comparePassword)
        next(new HttpException(400, "Password Not Correct"));
      else {
        const salt = await bcrypt.genSalt(10);
        const newHashPass = await bcrypt.hash(nouveauPassword, salt);
        await db.User.updateOne(
          { _id: findIdUser.id },
          { $set: { password: newHashPass } }
        )
          .then(() => res.json("Password Updated"))
          .catch(() => next(new HttpException(400, "Password Not Updated")));
      }
    }
  };

  public ForgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email } = req.body;

    if (email == "")
      return next(new HttpException(400, "Please Fill The Fields Input Email"));

    const findEmail = await db.User.findOne({ email });
    if (!findEmail) return next(new HttpException(400, "Email Not Found"));
    else {
      Mailer.SendMail("verify-forgot-password", email);
      res.json("Check Your Email");
    }
  };

  public VerifyForgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token: any = req.params.token;
    const verifyToken: any = await jwt.verify(token, env.Node_ENV);

    if (!verifyToken) return next(new HttpException(400, "Token Not Verified"));
    else {
      const verifyTokenEmail: any = await db.User.findOne({
        email: verifyToken.email,
      });

      if (!verifyTokenEmail)
        return next(new HttpException(400, "Token Verify Email"));
      else {
        const newToken = this.generateToken(verifyTokenEmail._id);
        Storage("new-token", newToken);
        res.json("form-forgot-password");
      }
    }
  };

  public FormForgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { password, confirmPassword } = req.body;
    const token: any = Storage("new-token");

    if (token == "" || password == "" || confirmPassword == "")
      return next(new HttpException(400, "Please Fill All The Fields"));
    else {
      if (!isStrongPassword(password) || !isStrongPassword(confirmPassword))
        return next(new HttpException(400, "Password Not Strong"));
      else {
        if (password !== confirmPassword)
          return next(new HttpException(400, "Password Not Matched"));
        else {
          const verifyToken: any = await jwt.verify(token, env.Node_ENV);

          if (!verifyToken)
            return next(new HttpException(400, "Token Not Verified"));
          else {
            const findIdUser = await db.User.findById(verifyToken.id);
            if (!findIdUser)
              throw Error("Error, User not Foun, replay to check your email");
            else {
              const salt = await bcrypt.genSalt(10);
              const newPassHashed = await bcrypt.hash(password, salt);
              await db.User.updateOne(
                { _id: findIdUser._id },
                { $set: { password: newPassHashed } }
              )
                .then(() => res.json("Your Password Hashed"))
                .catch(() =>
                  next(new HttpException(400, "Not Update Password"))
                );
            }
          }
        }
      }
    }
  };

  public Logout = (req: Request, res: Response, next: NextFunction) => {
    Storage.clear()
  };

  private generateToken = (id: string) => {
    const token = jwt.sign({ id }, env.Node_ENV, {
      expiresIn: "30d",
    });
    return token;
  };
}

const UserController = new ControllerUser();

export default UserController;
