import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base-entity";

@Entity("users")
export class User extends BaseEntity {
  @Column({ type: "varchar", length: 100, nullable: false })
  firstName: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  lastName: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  alternateName?: string;
}
