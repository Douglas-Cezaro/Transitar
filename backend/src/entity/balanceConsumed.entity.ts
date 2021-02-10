import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { establishmentEntity } from "./establishment.entity";

@Entity({ name: "balanceconsumed" })
export class balanceConsumedEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => UserEntity, { eager: true, nullable: false})
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @ManyToOne(type => establishmentEntity, { nullable: false })
    establishment: establishmentEntity;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column({ type: 'double' })
    value: Number;
    
}