import { NextFunction, Request, Response } from "express";
// import Dependcies
import Storage from "local-storage";
import jwt from "jsonwebtoken";
import HttpException from "../errorHandler/HttpException";
import env from "../../utils/validateenv";

class PermissionUser {
  public User = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = Storage("token");
    if (!token) return next(new HttpException(500, "You Are Not Connected"));
    else {
      const verifyToken: any = await jwt.verify(token, env.Node_ENV);
      if (!verifyToken)
        return next(new HttpException(500, "Account Not Correct"));
      else next();
    }
  };
}

const UserPermission = new PermissionUser();

export default UserPermission;
