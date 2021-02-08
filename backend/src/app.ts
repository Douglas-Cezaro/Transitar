import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

//importando arquivo de rota
import loginRouter from "./routers/login.router";
import userRouter from "./routers/user.router";
import resetPasswordRouter from "./routers/resetPassword.router";
import reportRouter from "./routers/report.router";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  //Carrega os middleware da aplicação
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use("/login", loginRouter);
    this.express.use("/user", userRouter);
    this.express.use("/forgotPassword", resetPasswordRouter);
    this.express.use("/report", reportRouter);
  }
}

export default new App().express;