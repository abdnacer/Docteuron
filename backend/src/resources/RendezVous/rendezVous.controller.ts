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
    const { idDoctor, idPatient, date, heure, phone } = req.body;

    if (idDoctor == "" || idPatient == "" || date == "" || heure == "")
      return next(new HttpException(400, "Please Fill All The Fields"));
    else {
      if (!isDate(date))
        return next(new HttpException(400, "Invalid input Date Birthday"));
      else {
        const idDoctorExists = await db.User.findById({ _id: idDoctor });
        const idPatientExists = await db.User.findById({ _id: idPatient });
        const phoneExsts = await db.RendezVous.findOne({ phone });

        if (phoneExsts) {
          return next(new HttpException(400, "Phone Deja Exists"));
        } else {
          if (idDoctorExists && idPatientExists) {
            const createRendezVous = await db.RendezVous.create({
              idDoctor: idDoctor,
              idPatient: idPatient,
              date: date,
              heure: heure,
              phone: phone,
            });

            if (createRendezVous) {
              res.json("Rendez-vous Succes");
            } else {
              return next(new HttpException(400, "Rendez-vous Not Success"));
            }
          } else {
            return next(new HttpException(400, "User Not Found"));
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
        const getRendezVous = await db.RendezVous.find({
          idDoctor: verifyToken.id,
        });
        res.send(getRendezVous);
      }
    }
  };
}

const RendezVousController = new ControllerRendezVous();

export default RendezVousController;
