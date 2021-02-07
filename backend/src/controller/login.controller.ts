import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import GenToken from "../config/generateToken";

const bcrypt = require("bcryptjs");

class loginController {
    public async login(req: Request, res: Response) {
        try {

            const { username, password } = req.body;

            // Valdia existencia do Usuario por E-mail ou Cpf!
            const user = await getRepository(UserEntity)
                .createQueryBuilder()
                .where('email = :email or cpf = :cpf', {
                    email: username,
                    cpf: username
                }).getOne();

            // Verefica se o Usuario Existe!
            if (!user) {
                return res.status(404).send({ error: "Usúario não encontrado!" });
            }

            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(404).send({ error: "Senha inválida!" });
            }

            user.password = undefined;

            // gera token.
            const token = GenToken.generatorToken({ id: user });

            return res.status(200).send({ user, token });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new loginController();
