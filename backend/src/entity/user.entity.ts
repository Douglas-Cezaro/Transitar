import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./imageUser.entity";
@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 28 })
  fullName: string;

  @Column({ nullable: false })
  cpf: String;

  @Column({ nullable: false })
  email: String;

  @Column({ nullable: false })
  phone: String;

  @Column({ nullable: false })
  password: String;

  @Column({ nullable: false })
  resetToken: String;

  @Column({ nullable: false, type: "datetime" })
  dataReset: Date;

  @OneToMany(() => Image, (image) => image.user, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "user_id" })
  images: Image[];
}
