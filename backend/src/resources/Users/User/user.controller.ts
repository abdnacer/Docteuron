import { NextFunction, Request, Response } from "express";
import db from "../../../resources";
import HttpException from "../../../middleware/errorHandler/HttpException";

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
      return next(new HttpException(400, "Data Doctor Not Found"));
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
      return next(new HttpException(400, "Data Patient Not Found"));
    else res.json(dataPatient);
  };

  public BannerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const data:any = await db.User.findById(id);
    data.isBanned = !data.isBanned;
    await data.save();
    res.send(data.isBanned);
  };
}

const UserController = new ControllerUser();

export default UserController;
