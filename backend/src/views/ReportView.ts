import { ReportEntity } from "../entity/report.entity";
import imagesView from "./ImagesView";

export default {
  render(report: ReportEntity) {
    return {
      id: report.id,
      description: report.description,
      latitude: report.latitude,
      longitude: report.longitude,
      images: imagesView.renderMany(report.images),
    };
  },

  renderMany(reports: ReportEntity[]) {
    return reports.map((report) => this.render(report));
  },
};
