import { model, Schema } from "mongoose";
import RendezVousBody from "../../utils/Interface/rendezVous.interface";

const rendezVousSchema = new Schema<RendezVousBody>({
  idDoctor: {
    type: String,
    required: true,
    trim: true,
  },
  idClient: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  phone: String
});

const RendezVous = model<RendezVousBody>('RendezVous', rendezVousSchema)

export default RendezVous