import { Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { UserEntity } from "../entity/user.entity";

import email from "../config/mail/email";

const bcrypt = require("bcryptjs");

class resetPassword {
  public async forgotPassword(req: Request, res: Response) {
    try {
      const { username } = req.body;

      // Valdia existencia do Usuario por E-mail ou Cpf!
      const user = await getRepository(UserEntity)
        .createQueryBuilder()
        .where("email = :email or cpf = :cpf", {
          email: username,
          cpf: username,
        })
        .getOne();

      // Verefica se o Usuario Existe!
      if (!user) {
        return res.status(404).send({ error: "Usúario não encontrado!" });
      }

      // criptografa token
      try {
        // criptografa token
        const salt = bcrypt.genSaltSync(10);
        var TokenReset = bcrypt.hashSync(String(Math.random()), salt);
        TokenReset = TokenReset.normalize("NFD")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove acentos
          .replace(/([^\w]+|\s+)/g, "-") // Substitui espaço e outros caracteres por hífen
          .replace(/\-\-+/g, "-") // Substitui multiplos hífens por um único hífen
          .replace(/(^-+|-+$)/, "");
      } catch (error) {
        res.status(500).send(error);
      }

      // Carrega data Solictação.
      var DataReset = new Date();
      DataReset.setHours(DataReset.getHours() + 1);

      // Insere parmatros Banco de Dados!
      await getConnection()
        .createQueryBuilder()
        .update(UserEntity)
        .set({
          resetToken: TokenReset,
          dataReset: DataReset,
        })
        .where("id = :id", { id: user.id })
        .execute();
      // fimm

      email.trasnporter
        .sendMail({
          from: process.env.USERNAME_EMAIL,
          to: user.email,
          subject: "TRANSITAR",
          text: "MENSAGEM AUTOMÁTICA DE TRANSITAR",
          html: `Use esse link para redefinir sua senha : ${process.env.URL_WEB}/${TokenReset}
            `,
        })
        .then((message) => {
          //console.log(message);
          res.status(200).send({ message: "OK" });
        })
        .catch((err) => {
          // console.log(err);
          res.status(500).send({ message: "Erro ao enviar e-mail!" });
        });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async validatesTokenHash(req: Request, res: Response) {
    try {
      const hash = req.params.hash;

      const user = await getRepository(UserEntity).findOne({
        where: {
          resetToken: hash,
        },
      });

      if (!user) {
        res.status(404).send({ message: "Link Inválido" });
      }

      //valida se o token ainda é valido
      if (String(hash) != String(user.resetToken)) {
        return res
          .status(404)
          .send({ message: "Código de recuperção invalido!" });
      }

      if (user.dataReset <= new Date()) {
        res.status(401).send({ message: "O código de recuperação expirou!" });
      }

      return res.status(200).send({ message: "código válido", hash: hash });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  public async saveNewPassword(req: Request, res: Response) {
    try {
      const { password, password2, hash } = req.body;
      console.log(hash);
      const user = await getRepository(UserEntity).findOne({
        where: {
          resetToken: hash,
        },
      });

      if (!user) {
        return res.status(400).send({ message: "Link Inválido" });
      }

      //valida se o token ainda é valido
      if (user.dataReset <= new Date()) {
        return res
          .status(500)
          .send({ message: "O código de recuperação expirou!" });
      }

      // Valida se as senhas conferem!
      if (password != password2) {
        return res.status(400).send({ message: "Senhas não conferem!" });
      }

      const salt = bcrypt.genSaltSync(10);
      const newpassword = bcrypt.hashSync(password, salt);

      // insere parmatros Banco de Dados!
      await getConnection()
        .createQueryBuilder()
        .update(UserEntity)
        .set({ resetToken: "", password: newpassword })
        .where("id = :id", { id: 1 })
        .execute();
      // // Fim

      return res.status(200).send({ message: "Senha atualizada com sucesso!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default new resetPassword();
