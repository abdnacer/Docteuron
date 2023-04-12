import express from "express";
import errorMiddleware from "../../middleware/errorHandler/error.middlewre";
import RendezVousController from "./rendezVous.controller";
// import Permission Middlewares
import UserPermission from "../../middleware/Permission/userPermission";

class RouterRendezVous {
  public router: express.Router;

  constructor() {
    this.router = express();
    this.RendezVous();
    this.errorMiddleware();
  }

  private RendezVous() {
    this.router.post(
      "/rendez-vous",
      UserPermission.User,
      RendezVousController.AddRendezVous
    );
    this.router.get(
      "/rendez-vous",
      UserPermission.User,
      RendezVousController.afficherRendezVous
    );
    this.router.get(
      "/rendez-vous-admin",
      UserPermission.User,
      RendezVousController.afficherRendezVousAdmin
    );
    this.router.put(
      "/rendez-vous/:id",
      UserPermission.User,
      RendezVousController.modifierRendezVous
    );
    this.router.delete(
      "/rendez-vous/:id",
      UserPermission.User,
      RendezVousController.deleteRendezVous
    );
  }

  private errorMiddleware() {
    this.router.use(errorMiddleware);
  }
}

const RendezVousRouter = new RouterRendezVous().router;

export default RendezVousRouter;
