import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { userBalanceEntity } from "./userBalance.entity";
import { punctuatedRoutesEntity } from "./punctuatedRoutes.entity";
import { balanceConsumedEntity } from "./balanceConsumed.entity";

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

  @OneToMany(type => userBalanceEntity, balance => balance.user, { onDelete: "CASCADE" })
  balance: userBalanceEntity[];

  @OneToMany(type => punctuatedRoutesEntity, punctuated => punctuated.user, { onDelete: "CASCADE" })
  punctuated: punctuatedRoutesEntity[];

  @OneToMany(type => balanceConsumedEntity, consumed => consumed.user, { onDelete: "CASCADE" })
  consumed: balanceConsumedEntity[];
  
}
