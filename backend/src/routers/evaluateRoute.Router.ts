import { Router } from "express";
import evaluateRouteController from "../controller/evaluateRoute.controller";
import validToken from "../middlewares/auth.middlewares";

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/",/*[validToken}*/ evaluateRouteController.evaluateRoute);
    }
}

export default new Routes().router;