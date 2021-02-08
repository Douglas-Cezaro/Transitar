import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { balanceConsumedEntity } from "./balanceConsumed.entity";

@Entity({ name: "establishment" })
export class establishmentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @OneToMany(type => balanceConsumedEntity, consumed => consumed.user, { onDelete: "CASCADE" })
    consumed: balanceConsumedEntity[];
}