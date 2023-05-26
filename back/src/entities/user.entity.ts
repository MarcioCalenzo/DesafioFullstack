import { Exclude, Expose, Type } from "class-transformer";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./contact.entity";
import { hashSync, getRounds } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Expose()
  readonly id: string;

  @Column({ length: 60 })
  @Expose()
  name: string;

  @Column({ length: 80, unique: true })
  @Expose()
  email: string;

  @Exclude()
  @Column({ length: 60 })
  password: string;

  @Column()
  @Expose()
  isAdm: boolean;

  @Column({ default: true })
  @Expose()
  isActive: boolean;

  @Column({ length: 20, unique: true })
  @Expose()
  phone: string;

  @CreateDateColumn()
  @Expose()
  createdAt: Date;

  @UpdateDateColumn()
  @Expose()
  updatedAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { eager: true })
  @Type(() => Contact)
  @Expose()
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
