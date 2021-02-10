import { Router } from "express";
import punctuatedRoutesController from "../controller/punctuatedRoutes.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    
    private init() {
        this.router.get("/:id([0-9]+)", [validToken.authMiddlewares], punctuatedRoutesController.findByUser);
    }
}

export default new Routes().router;