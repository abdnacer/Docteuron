import {model, Schema } from "mongoose";
import UserBody from "../../utils/Interface/user.interface";

const userSchema = new Schema<UserBody>({
  nameComplete: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateBirthday: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  cin: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    ref: "Roles",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    password: String,
  },
  INPE: String,
  residence: String,
  cabinetName: String,
  specialty:  {
    type: String,
    ref: "Specialite",
  },
  description: String,
  isBanned: Boolean,
  verification: Boolean,
});

const User = model<UserBody>('User', userSchema);

export default User