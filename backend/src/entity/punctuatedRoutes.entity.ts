import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "punctuatedroutes" })
export class punctuatedRoutesEntity {

    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(type => UserEntity, { onDelete: "CASCADE" })
    user: UserEntity;

    @Column()
    date: Date;

    @Column()
    description: String;

    @Column({ type: 'double' })
    ltStart: Number;

    @Column({ type: 'double' })
    LgSatrt: Number;

    @Column({ type: 'double' })
    ltEnd: Number;

    @Column({ type: 'double' })
    lgEnd: Number;

    @Column({ type: 'double' })
    value: Number;

}