import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
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
  
}
