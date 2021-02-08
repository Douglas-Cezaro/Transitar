import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "reports" })
export class ReportEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    description: string;

    @Column({ type: 'double' })
    latitude: Number;

    @Column({ type: 'double' })
    longitude: Number;
}