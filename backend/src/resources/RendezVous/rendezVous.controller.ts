import { Request, Response, NextFunction } from "express";
import isDate from "validator/lib/isDate";
import isMobilePhone from "validator/lib/isMobilePhone";
import HttpException from "../../middleware/errorHandler/HttpException";
import db from "../../resources";
import Storage from "local-storage";
import jwt from "jsonwebtoken";
import env from "../../utils/validateenv";
import mongoose from "mongoose";

class ControllerRendezVous {
  public AddRendezVous = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { idDoctor, date, heure, phone } = req.body;
    const token: any = Storage("token");

    if (idDoctor == "" || date == "" || heure == "")
      return next(new HttpException(400, "Please Fill All The Fields"));
    else {
      if (!isDate(date))
        return next(new HttpException(400, "Invalid input Date"));
      else {
        const idDoctorExists = await db.User.findById({ _id: idDoctor });
        const phoneExsts = await db.RendezVous.findOne({ phone });
        const verifyToken: any = await jwt.verify(token, env.Node_ENV);

        if (!verifyToken)
          return next(new HttpException(400, "Your Are Not Logged"));
        else {
          if (phoneExsts) {
            return next(new HttpException(400, "Phone Deja Exists"));
          } else {
            if (idDoctorExists) {
              const findDoctorForRendezVous = await db.RendezVous.findOne({
                idDoctor: idDoctor,
              });

              if (findDoctorForRendezVous)
                return next(
                  new HttpException(400, "You Are Reserved Rendez-vous")
                );
              else {
                const createRendezVous = await db.RendezVous.create({
                  idDoctor: idDoctor,
                  idPatient: verifyToken.id,
                  date: date,
                  heure: heure,
                  phone: phone,
                });

                if (createRendezVous) {
                  res.json("Rendez-vous Succes");
                } else {
                  return next(
                    new HttpException(400, "Rendez-vous Not Success")
                  );
                }
              }
            }
          }
        }
      }
    }
  };

  public afficherRendezVous = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token: any = Storage("token");

    if (!token) return next(new HttpException(400, "Your Are Not Logged"));
    else {
      const verifyToken: any = await jwt.verify(token, env.Node_ENV);
      if (!verifyToken) next(new HttpException(400, "Token Not Verified"));
      else {
        const findIdUser = await db.User.findById(verifyToken.id);

        if (!findIdUser) return next(new HttpException(400, "User Not Found"));
        else {
          const getRendezVous = await db.RendezVous.find({
            idDoctor: findIdUser.id,
          });
          if (!getRendezVous)
            return next(new HttpException(400, "Rendez-vous Not Found"));
          else res.json(getRendezVous);
        }
      }
    }
  };

  public afficherRendezVousAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // const getAllRendezVous = await db.RendezVous.find();
    const getAllRendezVous = await db.RendezVous.find()
    .populate({ path: 'idDoctor', model: db.User })
    .populate({ path: 'idPatient', model: db.User })

    if (!getAllRendezVous)
      return next(new HttpException(400, "Rendez-Vous Not Found"));
    else res.json(getAllRendezVous);
  };

  public modifierRendezVous = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { date, heure } = req.body;
    // const token: any = Storage("token");

    if (!id)
      return next(new HttpException(400, "id The This Rendez-vous Not Found"));
    else {
      if (date == "" || heure == "")
        return next(new HttpException(400, "Please Fill All The Fields"));
      else {
        if (!isDate(date))
          return next(new HttpException(400, "Invalid input Date"));
        else {
          const findIdRendezVous = await db.RendezVous.findById({ _id: id });

          if (!findIdRendezVous)
            return next(new HttpException(400, "Rendez-Vous Not Found"));
          else {
            const updateRendezVous = await db.RendezVous.findByIdAndUpdate(
              { _id: id },
              { $set: { date, heure } }
            );
            if (!updateRendezVous)
              return next(new HttpException(400, "Rendez-Vous Not Updated"));
            else res.json("Rendez-Vous Updated");
          }
        }
      }
    }
  };

  public deleteRendezVous = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;

    if (!id) return next(new HttpException(400, "Id Not Found"));
    else {
      const findId = await db.RendezVous.findById({ _id: id });

      if (!findId)
        return next(new HttpException(400, "Data Rendez-Vous Not Found"));
      else {
        const rendezVousDeleted = await db.RendezVous.findByIdAndDelete({
          _id: id,
        });

        if (!rendezVousDeleted)
          return next(new HttpException(400, "Rendez-Vous Not Deleted"));
        else res.json("Rendez-Vous Deleted");
      }
    }
  };
}

const RendezVousController = new ControllerRendezVous();

export default RendezVousController;
