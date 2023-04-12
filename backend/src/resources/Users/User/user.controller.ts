import { NextFunction, Request, Response } from "express";
import db from "../../../resources";
import HttpException from "../../../middleware/errorHandler/HttpException";
import Storage from "local-storage";
import jwt from "jsonwebtoken";
import env from "../../../utils/validateenv";

class ControllerUser {
  public AfficherDoctor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const role = await db.Role.aggregate([{ $match: { name: "doctor" } }]);

    const dataDoctor = await db.User.find({
      role: role[0]._id,
    });

    if (!dataDoctor)
      return next(new HttpException(200, "Data Doctor Not Found"));
    else res.json(dataDoctor);
  };

  public AfficherPatient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const role = await db.Role.aggregate([{ $match: { name: "patient" } }]);

    const dataPatient = await db.User.find({
      role: role[0]._id,
    });

    if (!dataPatient)
      return next(new HttpException(200, "Data Patient Not Found"));
    else res.json(dataPatient);
  };

  public BannerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const data: any = await db.User.findById(id);
    data.isBanned = !data.isBanned;
    await data.save();
    res.send(data.isBanned);
  };

  public StatistiqueAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const countUser = await db.User.find().count();
    const countRendezVous = await db.RendezVous.find().count();
    const countSpecialite = await db.Specialite.find().count();

    if (!countUser && !countRendezVous && !countSpecialite)
      return next(new HttpException(200, "Collection Vide"));
    else res.json({ countUser, countSpecialite, countRendezVous });
  };

  public SettingUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token: any = Storage("token");

    if (!token) return next(new HttpException(200, "You Are Not Logged"));
    else {
      const findId: any = await jwt.verify(token, env.Node_ENV);

      if (!findId) return next(new HttpException(200, "Token Not Verified"));
      else {
        const user = await db.User.findById(findId.id);
        if (!user) return next(new HttpException(200, "User Not Found"));
        else res.json(user);
      }
    }
  };
}

const UserController = new ControllerUser();

export default UserController;
