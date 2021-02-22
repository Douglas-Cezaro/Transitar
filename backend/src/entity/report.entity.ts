import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Image from "./imageReport.entity";

@Entity({ name: "reports" })
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  description: string;

  @Column({ type: "double" })
  latitude: Number;

  @Column({ type: "double" })
  longitude: Number;

  @OneToMany(() => Image, (image) => image.report, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "report_id" })
  images: Image[];
}
