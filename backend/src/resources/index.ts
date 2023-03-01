// Dependencies
import mongoose from "mongoose";
// Models
import User from "./Users/user.model";
import Role from "./Roles/role.model";
import RendezVous from "./RendezVous/rendezVous.model";
import Specialite from "./Specialites/specialite.model";
// Interface
import dbBody from "../utils/Interface/db.interface";
import RoleBody from "../utils/Interface/role.interface";

// mongoose.Promise = global.Promise;

const db: dbBody = {
  mongoose,
  User,
  Role,
  RendezVous,
  Specialite
};

async function seedRoles() {
  try {
    const count = await db.Role.estimatedDocumentCount();
    if (count === 0) {
      const rolesToInsert: RoleBody[] = [
        { name: "admin" },
        { name: "patient" },
        { name: "doctor" },
      ];
      const insertedRoles = await db.Role.insertMany(rolesToInsert);
      console.log("Inserted roles: ", insertedRoles);
    }
  } catch (error) {
    console.error("Error seeding roles: ", error);
  }
}

seedRoles();
export default db;