import Image from "../entity/imageReport.entity";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://${process.env.IP}:3000/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
