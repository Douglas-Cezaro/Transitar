import { Router } from "express";
import * as multer from "multer";
import reportController from "../controller/report.controller";
import uploadConfig from "../config/upload";
const upload = multer(uploadConfig);

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post("/", upload.array("images"), reportController.create);
    this.router.get("/", reportController.index);
  }
}

export default new Routes().router;
