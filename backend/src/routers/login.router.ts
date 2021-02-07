import { Router } from "express";
import loginController from "../controller/login.controller";
// import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/", loginController.login);
    }
}

export default new Routes().router;