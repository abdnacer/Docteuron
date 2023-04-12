import { NextFunction, Request, Response } from "express";
// import Dependcies
import jwt from "jsonwebtoken";
import Storage from "local-storage";
import env from "../../utils/validateenv"
import HttpException from "../errorHandler/HttpException";

class PermissionAuth {
    public Auth = (req:Request, res: Response, next: NextFunction) => {
        const token: any = Storage("token")
        if(!token) next()
        else{
            const verifyToken:any = jwt.verify(token, env.Node_ENV) 
            if(!verifyToken) next()
            else return next(new HttpException(500, "You Are Already Connected"))
        }
    }
}

const AuthPermission = new PermissionAuth

export default AuthPermission