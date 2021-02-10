import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "userbalance" })
export class UserBalanceEntity {

    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(type => UserEntity, {nullable: false })
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @Column({ type: 'double' })
    balance: Number;

}