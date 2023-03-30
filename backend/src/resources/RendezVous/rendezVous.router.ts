import express from "express"
import errorMiddleware from "../../middleware/errorHandler/error.middlewre"
import RendezVousController from "./rendezVous.controller"

class RouterRendezVous {
    public router: express.Router

    constructor(){
        this.router = express()
        this.RendezVous()
        this.errorMiddleware()
    }

    private RendezVous(){
        this.router.post("/rendez-vous", RendezVousController.AddRendezVous)
        this.router.get("/rendez-vous", RendezVousController.afficherRendezVous)
        this.router.get("/rendez-vous-admin", RendezVousController.afficherRendezVousAdmin)
        this.router.put("/rendez-vous/:id", RendezVousController.modifierRendezVous)
        this.router.delete("/rendez-vous/:id", RendezVousController.deleteRendezVous)
    }

    private errorMiddleware(){
        this.router.use(errorMiddleware)
    }
}

const RendezVousRouter = new RouterRendezVous().router

export default RendezVousRouter