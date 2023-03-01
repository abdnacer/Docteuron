// Dependencies
import mongoose from "mongoose";
// Models
import User from "../../resources/Users/user.model";
import Role from "../../resources/Roles/role.model";
import RendezVous from "../../resources/RendezVous/rendezVous.model";
import Specialite from "../../resources/Specialites/specialite.model";

interface dbBody {
    mongoose: typeof mongoose
    User: typeof User
    Role: typeof Role
    RendezVous: typeof RendezVous
    Specialite: typeof Specialite
}

export default dbBody