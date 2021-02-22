import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ReportEntity } from "../entity/report.entity";
import ReportView from "../views/ReportView";

class reportController {
  public async index(req: Request, res: Response) {
    const reportsRepository = getRepository(ReportEntity);

    const report = await reportsRepository.find({
      relations: ["images"],
    });

    return res.json(ReportView.renderMany(report));
  }

  public async create(req: Request, res: Response) {
    try {
      const { description, latitude, longitude } = req.body;
      const requestImages = req.files as Express.Multer.File[];

      const images = requestImages.map((image) => {
        return { path: image.filename };
      });

      const data = {
        description,
        latitude,
        longitude,
        images,
      };

      const ReportRepository = getRepository(ReportEntity);

      const report = ReportRepository.create(data);

      await ReportRepository.save(report);

      return res.status(201).json(report);
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
}

export default new reportController();
