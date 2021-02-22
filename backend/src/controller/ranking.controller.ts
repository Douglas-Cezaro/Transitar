import { Request, Response } from "express";
import { getConnection, Index } from "typeorm";

class rankingController {
    public async findRanking(req: Request, res: Response) {
        try {
            const id = req.params.id;

            // carrega ranking
            const ranking = await getConnection().query(
                `SELECT
                CONCAT((@RANK := @RANK + 1),'º') AS RANK_USER,
                X.*
            FROM (SELECT
                    USERS.ID,
                    USERS.FUllNAME,	
                  SUM(VALUE) AS VALUE
                  FROM PUNCTUATEDROUTES 
                    INNER JOIN USERS ON USERS.ID = PUNCTUATEDROUTES.USERID 
                  GROUP BY USERID
                  ORDER BY VALUE DESC) X, (SELECT @RANK:=0) R`
            );

            //Carrega o Usuario logado
            let user = [];
            if (ranking) {
                ranking.forEach(element => {
                    if (element.ID == id) {
                        user = element;
                    }
                });
            };

            res.send({ user, ranking });

        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new rankingController();
