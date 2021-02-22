import { Router } from "express";
import rankingController from "../controller/ranking.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    
    private init() {
        this.router.get("/:id([0-9]+)", [validToken.authMiddlewares], rankingController.findRanking);
    }
}

export default new Routes().router;