import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ReportEntity } from "../entity/report.entity";

class reportController {

    public async create(req: Request, res: Response) {
        try {
            let user = req.body;
            // Salva Report
            await getRepository(ReportEntity).save(user);
            return res.send({ user });
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new reportController();