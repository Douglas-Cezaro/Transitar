import { Router } from "express";
import userController from "../controller/user.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/", userController.create);
        this.router.put("/:id([0-9]+)", [validToken.authMiddlewares], userController.update);
        this.router.get("/:id([0-9]+)", [validToken.authMiddlewares], userController.findById);
    }
}

export default new Routes().router;