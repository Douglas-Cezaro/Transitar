import { Request, Response } from "express";

class validateTokenController {
    public async validate(req: Request, res: Response) {
        try {

            const authHeader = req.headers.authorization;

            return res.status(200).send({ token: authHeader });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new validateTokenController();
