import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "userbalance" })
export class userBalanceEntity {

    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(type => UserEntity, { onDelete: "CASCADE" })
    user: UserEntity;

    @Column({ type: 'double' })
    balance: Number;
    
}