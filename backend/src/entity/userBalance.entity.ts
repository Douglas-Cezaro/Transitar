import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "userbalance" })
export class userBalanceEntity {

    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(type => UserEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @Column({ type: 'double' })
    balance: Number;

}