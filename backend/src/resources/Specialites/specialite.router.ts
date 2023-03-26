import express from "express";
import errorMiddleware from "../../middleware/errorHandler/error.middlewre";
import SpecialiteController from "./specialite.controller";

class RouterSpecialite {
    public router: express.Router

    constructor() {
        this.router = express()
        this.Specialite()
        this.errorMiddleware()
    }

    private Specialite(){
        this.router.post("/specialite", SpecialiteController.addSpecialite)
        this.router.get("/specialite", SpecialiteController.afficherSpecialite)
        this.router.get("/specialite/admin", SpecialiteController.afficherSpecialiteAdmin)
        this.router.put("/specialite/:id", SpecialiteController.updateSpecialite)
        this.router.delete("/specialite/:id", SpecialiteController.deleteSpecialite)
    }

    private errorMiddleware(){
        this.router.use(errorMiddleware)
    }
}

const SpecialiteRouter = new RouterSpecialite().router

export default SpecialiteRouter