import { decode } from "punycode";

const jw = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

class authMiddlewares {
  public authMiddlewares(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ error: "Nenhum token fornecido" });
    }

    const parts = authHeader.split(" ");

    if (!(parts.length === 2)) {
      return res.status(401).send({ error: "Erro no token" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).send({ error: "Token mal formatado!" });
    }

    jw.verify(token, authConfig.secret, (err, decode) => {
      if (err) {
        return res.status(401).send({ error: "Token Invalido" });
      }

      req.userId = decode.id;

      return next();
    });
  }
}

export default new authMiddlewares();
