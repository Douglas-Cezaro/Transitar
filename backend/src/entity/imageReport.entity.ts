import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ReportEntity } from "./report.entity";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => ReportEntity, (report) => report.images)
  @JoinColumn({ name: "report_id" })
  report: ReportEntity;
}
