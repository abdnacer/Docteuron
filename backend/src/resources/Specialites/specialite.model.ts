import { model, Schema } from "mongoose";
import SpecialiteBody from "../../utils/Interface/specialite.interface";

const specialiteSchema = new Schema<SpecialiteBody>({
  name: {
    type: String,
    required: true,
  },
});

const Specialite = model<SpecialiteBody>("Specialite", specialiteSchema);

export default Specialite;
