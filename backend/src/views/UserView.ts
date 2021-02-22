import { UserEntity } from "../entity/user.entity";
import imagesView from "./ImagesViewUser";

export default {
  render(user: UserEntity) {
    return {
      id: user.id,
      fullName: user.fullName,
      cpf: user.cpf,
      email: user.email,
      phone: user.phone,
      password: user.password,
      images: imagesView.renderMany(user.images),
    };
  },

  renderMany(users: UserEntity[]) {
    return users.map((user) => this.render(user));
  },
};
