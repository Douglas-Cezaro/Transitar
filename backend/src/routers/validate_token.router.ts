import { Router } from "express";
import userController from "../controller/validate_token.controller";
import validToken from "../middlewares/auth.middlewares"

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/", [validToken.authMiddlewares], userController.validate);
    }
}

export default new Routes().router;