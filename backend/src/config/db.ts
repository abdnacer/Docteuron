import mongoose from "mongoose";
import env from '../utils/validateenv'

class DB {
    constructor(){
        mongoose.connect(env.MONGO_DB)
        .then(() => {
            console.log('Database Connected')
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const connectDB = new DB()