import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { punctuatedRoutesEntity } from "../entity/punctuatedRoutes.entity";
import GenToken from "../config/generateToken";

const bcrypt = require("bcryptjs");

class punctuatedRoutesController {
    public async findByUser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            //Carrega pontuação do usuário
            const punctuateds = await getRepository(punctuatedRoutesEntity)
                .createQueryBuilder()
                .where('userid = :userid')
                .setParameters({ userid: id })
                .getMany();

            res.status(200).send(punctuateds);

        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new punctuatedRoutesController();
