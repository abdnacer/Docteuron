import {model, Schema} from "mongoose";
import RoleBody from "../../utils/Interface/role.interface";

const roleSchema = new Schema<RoleBody>({
    name: {
        type: String,
        required: true
    }
})

const Roles = model<RoleBody>('Roles', roleSchema);

export default Roles