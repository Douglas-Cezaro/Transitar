import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "establishments" })
export class establishmentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;
}