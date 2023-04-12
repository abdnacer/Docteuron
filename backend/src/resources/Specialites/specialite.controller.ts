import { NextFunction, Request, Response } from "express";
import HttpException from "../../middleware/errorHandler/HttpException";
import db from "../../resources";

class ControllerSpecialite {
  public addSpecialite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name } = req.body;

    if (name == "")
      return next(
        new HttpException(200, "Please Fill The Fields Name Specialite")
      );
    else {
      const specialiteFound = await db.Specialite.findOne({ name });

      if (specialiteFound)
        return next(new HttpException(200, "Specialite Déja Exsits"));
      else {
        const addSpecialite = await db.Specialite.create({
          name: name,
          approve: false,
        });

        if (!addSpecialite)
          return next(new HttpException(200, "Specialite Not Created"));
        else res.json("Specialite Created");
      }
    }
  };

  public afficherSpecialite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const getSpecialiteApprove = await db.Specialite.aggregate([
      { $match: { approve: true } },
    ]);

    if (getSpecialiteApprove) res.json(getSpecialiteApprove);
    else return next(new HttpException(200, "Specialite Not Found"));
  };

  public afficherSpecialiteAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const getAllSpecialite = await db.Specialite.find();

    if (getAllSpecialite) res.json(getAllSpecialite);
    else return next(new HttpException(200, "Specialite Not Found"));
  };

  public updateSpecialite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { name, approve } = req.body;

    if (name == "")
      return next(
        new HttpException(200, "Please Fill The Fields Name Specialite")
      );
    else {

      const specialiteUpdate = await db.Specialite.findByIdAndUpdate(
        { _id: id },
        { $set: { name, approve: approve } }
      );

      if(!specialiteUpdate) return next(new HttpException(200, 'Specialite Not Updated'))
      else res.json('Specialite Updated')
    }
  };

  public deleteSpecialite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;

    const findId = await db.Specialite.findById({ _id: id });

    if (!findId) return next(new HttpException(200, "Id Not Correct"));
    else {
      const specialiteDelete = await db.Specialite.findByIdAndDelete({
        _id: id,
      });

      if (!specialiteDelete)
        return next(new HttpException(200, "Specialiete Not Deleted"));
      else res.json("Specialite Deleted");
    }
  };
}

const SpecialiteController = new ControllerSpecialite();

export default SpecialiteController;
