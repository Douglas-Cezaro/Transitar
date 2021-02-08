import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { establishmentEntity } from "./establishment.entity";

@Entity({ name: "balanceConsumed" })
export class balanceConsumedEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => UserEntity, { onDelete: "CASCADE" })
    user: UserEntity;

    @ManyToOne(type => establishmentEntity, { onDelete: "CASCADE" })
    establishment: establishmentEntity;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column({ type: 'double' })
    value: Number;
    
}