import mongoose, { model, Schema } from "mongoose";
import RendezVousBody from "../../utils/Interface/rendezVous.interface";

const rendezVousSchema = new Schema<RendezVousBody>({
  idDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
    trim: true,
  },
  idPatient: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  heure: {
    type: String,
    required: true,
    trim: true,
  },
  phone: String,
});

const RendezVous = model<RendezVousBody>("RendezVous", rendezVousSchema);

export default RendezVous;
