import { Router } from "express";
import reportController from "../controller/report.controller";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    
    private init() {
        this.router.post("/", reportController.create);
    }
}

export default new Routes().router;