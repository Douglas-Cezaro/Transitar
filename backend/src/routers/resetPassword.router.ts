import { Router } from "express";
import resetPasswordController from "../controller/resetPassword.controller";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/", resetPasswordController.forgotPassword);
        this.router.post("/SaveNewPassword", resetPasswordController.saveNewPassword);
        this.router.get("/:hash", resetPasswordController.validatesTokenHash);
    }
}

export default new Routes().router;